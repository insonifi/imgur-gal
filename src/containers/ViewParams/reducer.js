// @flow

import * as c from './constants';
import type {Section, Sort, Page, Interval, Viral, ViewAction} from './types';

type State = {
	section: Section,
	sort: Sort,
	interval: Interval,
	page: Page,
	viral: Viral,
};

const initialState = {
	section: c.section.HOT,
	sort: c.sort.VIRAL,
	interval: c.interval.DAY,
	page: 0,
	viral: false,
};

export default function viewParams(
	state: State = initialState,
	action: ViewAction<*>
): State {
	switch (action.type) {
		case c.SECTION:
			return {...state, section: action.payload};
		case c.SORT:
			return {...state, sort: action.payload};
		case c.PAGE:
			return {...state, page: action.payload};
		case c.INTERVAL:
			return {...state, interval: action.payload};
		case c.VIRAL:
			return {...state, viral: action.payload};
		default:
			return state;
	}
}
