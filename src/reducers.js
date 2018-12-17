// @flow

import {combineReducers} from 'redux';
import viewParams from 'containers/ViewParams/reducer';
import list from 'containers/List/reducer';
import images from 'containers/Images/reducer';

export default combineReducers<*, *>({
	viewParams,
	list,
	images,
});
