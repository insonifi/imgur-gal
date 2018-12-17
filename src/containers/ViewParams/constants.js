// @flow

export const VIEW = 'view';
export const SECTION = `${VIEW}/section/SET`;
export const SORT = `${VIEW}/sort/SET`;
export const PAGE = `${VIEW}/page/SET`;
export const INTERVAL = `${VIEW}/interval/SET`;
export const VIRAL = `${VIEW}/viral/SET`;
export const REFRESH = `${VIEW}/REFRESH`;

export const section = {
	HOT: 'hot',
	TOP: 'top',
};

export const sort = {
	VIRAL: 'viral',
	TOP: 'top',
	TIME: 'time',
};

export const interval = {
	DAY: 'day',
	WEEK: 'week',
	MONTH: 'month',
	YEAR: 'year',
};
