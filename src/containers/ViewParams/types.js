// @flow

import * as constant from './constants';

export type Section = $Values<typeof constant.section>;
export type SectionList = typeof constant.section;
export type Sort = $Values<typeof constant.sort>;
export type SortList = typeof constant.sort;
export type Interval = $Values<typeof constant.interval>;
export type IntervalList = typeof constant.interval;
export type Viral = boolean;
export type Page = number;

export type ViewAction<T> = T => {
	type: string,
	payload: T,
};
