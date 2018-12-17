// @flow

import * as c from './constants';
import type {Section, Sort, Interval, Viral, Page, ViewAction} from './types';

export const refreshView: ViewAction<null> = () => ({
	type: c.REFRESH,
	payload: null,
});
export const setSection: ViewAction<Section> = payload => ({
	type: c.SECTION,
	payload,
});
export const setSort: ViewAction<Sort> = payload => ({
	type: c.SORT,
	payload,
});
export const setPage: ViewAction<Page> = payload => ({
	type: c.PAGE,
	payload,
});
export const setInterval: ViewAction<Interval> = payload => ({
	type: c.INTERVAL,
	payload,
});
export const setViral: ViewAction<Viral> = payload => ({
	type: c.VIRAL,
	payload,
});
