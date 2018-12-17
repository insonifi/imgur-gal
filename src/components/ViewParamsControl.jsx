// @flow

import * as React from 'react';
import {compose} from 'redux';
import injectSheet from 'react-jss';
import noop from 'lodash/fp/noop';

import {withViewParam} from 'containers/ViewParams';
import ListSelector from 'components/ListSelector';
import Switch from 'components/Switch';

import type {
	Section,
	SectionList,
	Sort,
	SortList,
	Interval,
	IntervalList,
	Viral,
} from 'containers/ViewParams/types';

type Props = {
	classes: Object,
	section: Section,
	sectionList: SectionList,
	setSection: Function,
	sort: Sort,
	sortList: SortList,
	setSort: Function,
	interval: Interval,
	intervalList: IntervalList,
	setInterval: Function,
	viral: Viral,
	setViral: Function,
	refreshView: Function,
};

const styles = {
	bar: {
		display: 'flex',
		alignItems: 'center',
		fontSize: 14,
		zIndex: 1,
		position: 'relative',
	},
};

function ViewParamsControl({classes, ...rest}: Props) {
	const {section, sectionList, setSection} = rest;
	const {sort, sortList, setSort} = rest;
	const {interval, intervalList, setInterval} = rest;
	const {viral, setViral} = rest;
	React.useEffect(() => {
		rest.refreshView();

		return noop;
	}, []);

	return (
		<div className={classes.bar}>
			<ListSelector value={section} list={sectionList} onChange={setSection} />
			<ListSelector value={sort} list={sortList} onChange={setSort} />
			<ListSelector
				value={interval}
				list={intervalList}
				onChange={setInterval}
			/>
			<Switch name="viral" value={viral} onChange={setViral} />
		</div>
	);
}

export default compose(
	injectSheet(styles),
	withViewParam
)(ViewParamsControl);
