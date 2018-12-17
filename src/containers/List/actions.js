// @flow

import * as c from './constants';
import type {loadAction} from './types.js';

export function listLoad(list: Array<*>) {
	return {
		type: c.LOAD,
		payload: list,
	};
}
