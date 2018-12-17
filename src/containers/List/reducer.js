// @flow

import * as c from './constants';
import type {loadAction} from './types';

const initialState: Array<*> = [];

export default function list(
	state: Array<*> = initialState,
	action: loadAction
) {
	switch (action.type) {
		case c.LOAD:
			return action.payload;
		default:
			return state;
	}
}
