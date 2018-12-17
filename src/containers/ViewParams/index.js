// @flow

import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as c from './constants';
import * as actions from './actions';

function mapStateToProps({viewParams: {section, sort, page, interval, viral}}) {
	return {
		section,
		sectionList: c.section,
		sort,
		sortList: c.sort,
		interval,
		intervalList: c.interval,
		viral,
		page,
	};
}
function mapActionsToProps(dispatch) {
	return bindActionCreators(actions, dispatch);
}
export const withViewParam = connect(
	mapStateToProps,
	mapActionsToProps
);

export default {withViewParam};
