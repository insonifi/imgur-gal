// @flow

// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

function mapStateToProps({list}) {
	return {
		list,
	};
}

export const withList = connect(mapStateToProps);

export default {withList};
