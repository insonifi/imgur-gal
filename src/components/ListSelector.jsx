// @flow

import * as React from 'react';
import injectSheet from 'react-jss';
import flow from 'lodash/fp/flow';
import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import join from 'lodash/fp/join';

import type {
	Section,
	SectionList,
	Sort,
	SortList,
	Interval,
	IntervalList,
} from 'containers/ViewParams/types';

type Props = {
	classes: Object,
	value: Section | Sort | Interval,
	list: SectionList | SortList | IntervalList,
	onChange: Function,
};

const getId = flow([map(get(0)), join('-')]);
const styles = {
	box: {
		display: 'inline-block',
		height: 30,
		width: '10em',
		position: 'relative',
		overflow: 'hidden',
		'&:hover': {
			overflow: 'initial',
		},
	},
	list: {
		backgroundColor: 'white',
		position: 'absolute',
		boxShadow: [[-1, -1, 0, 0, 'black', 'inset']],
		width: 'inherit',
	},
	item: {
		display: 'block',
		padding: 6,
		textAlign: 'center',
		'& > $radio': {
			display: 'none',
		},
	},
	radio: {
		'&:checked ~ $label': {
			textDecoration: 'underline',
		},
	},
	label: {
		'&:hover': {
			textDecoration: 'underline dotted',
			cursor: 'pointer',
		},
	},
};

function ListSelector({classes, value, list, onChange}: Props) {
	const boxRef = React.useRef();
	const selectedRef = React.useRef();
	const handleChange = React.useCallback(
		(e: SyntheticInputEvent<HTMLInputElement>) => onChange(e.target.value),
		[list]
	);
	const array: Array<string> = Object.values(list);
	const handleMouseOut = React.useCallback(
		() => {
			if (boxRef.current && selectedRef.current) {
				boxRef.current.scrollTop = selectedRef.current.offsetTop;
			}
		},
		[value]
	);

	return (
		<div ref={boxRef} className={classes.box} onMouseOut={handleMouseOut}>
			<div className={classes.list} onChange={handleChange}>
				{array.map((name, idx) => (
					<label
						className={classes.item}
						key={name}
						ref={value === name ? selectedRef : null}
					>
						<input
							className={classes.radio}
							type="radio"
							defaultChecked={value === name}
							name={getId(array)}
							value={name}
						/>
						<span className={classes.label}>{name}</span>
					</label>
				))}
			</div>
		</div>
	);
}

export default injectSheet(styles)(ListSelector);
