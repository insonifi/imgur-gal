// @flow

import * as actions from './actions';

export type RequestAction = typeof actions.requestImage;
export type Image = Object;
export type ImageIndex = {
	[string]: Image,
};
