// @flow

import * as React from 'react';
import injectSheet from 'react-jss';

const styles = {
	box: {
		display: 'inline-flex',
		alignItems: 'center',
		margin: [[0, 16]],
	},
	checkbox: {
		display: 'none',
		'&:not(:checked) ~ $label': {
			textDecoration: 'line-through',
		},
	},
	label: {
		textDecoration: 'none',
		'&:hover': {
			cursor: 'pointer',
			textDecoration: 'underline dotted',
		},
	},
};

type Props = {
	classes: Object,
	name: string,
	value: boolean,
	onChange: Function,
};

function Switch({classes, name, value, onChange}: Props) {
	const handleChange = React.useCallback(
		(e: SyntheticInputEvent<HTMLInputElement>) => onChange(!value),
		[value]
	);

	return (
		<div className={classes.box}>
			<label className={classes.label}>
				<input
					className={classes.checkbox}
					type="checkbox"
					defaultChecked={value}
					onChange={handleChange}
				/>
				<span className={classes.label}>{name}</span>
			</label>
		</div>
	);
}

export default injectSheet(styles)(Switch);
