// @flow

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from './actions';

function mapStateToProps({images}) {
	return {
		images,
	};
}

function mapActionsToProps(dispatch) {
	return bindActionCreators(actions, dispatch);
}

export const withImages = connect(
	mapStateToProps,
	mapActionsToProps
);
export default {withImages};
