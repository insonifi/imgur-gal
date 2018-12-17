// @flow

import {call, put, select, take, takeEvery} from 'redux-saga/effects';
import identity from 'lodash/fp/identity';
import startsWith from 'lodash/fp/startsWith';
import * as api from 'api';

import * as vwConst from 'containers/ViewParams/constants';
import * as imgConst from 'containers/Images/constants';
import * as listActions from 'containers/List/actions';
import * as imgActions from 'containers/Images/actions';
import type {Saga} from 'redux-saga';

function* updateViewParams(): Saga<void> {
	const params = yield select(({viewParams}) => viewParams);
	const {data, success} = yield call(api.getGallery, params);

	if (success) {
		yield put(listActions.listLoad(data));
	}
}

function* requestImage({payload}): Saga<void> {
	const {data, success} = yield call(api.getImage, payload);

	if (success) {
		yield put(imgActions.loadedImage(data));
	}
}

export default function*(): Saga<void> {
	yield takeEvery(({type}) => startsWith(vwConst.VIEW, type), updateViewParams);
	yield takeEvery(imgConst.REQUEST, requestImage);
}
