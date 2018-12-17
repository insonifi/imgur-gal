// @flow

import * as c from './constants';

export type loadAction = {
	type: typeof c.LOAD,
	payload: Array<*>,
};
