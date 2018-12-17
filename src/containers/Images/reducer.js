// @flow

import * as c from './constants';
import type {RequestAction, ImageIndex} from './types';

type State = ImageIndex;
const initialState: State = {};

export default function list(
	state: State = initialState,
	action: RequestAction
) {
	switch (action.type) {
		case c.IMAGE:
			return {
				...state,
				[action.payload.id]: action.payload,
			};
		default:
			return state;
	}
}
