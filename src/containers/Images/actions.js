// @flow

import * as c from './constants';
import type {Image} from './types';

export function requestImage(id: string) {
	return {
		type: c.REQUEST,
		payload: id,
	};
}

export function loadedImage(payload: Image) {
	return {
		type: c.IMAGE,
		payload,
	};
}
