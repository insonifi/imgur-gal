// @flow

import * as React from 'react';
import injectSheet from 'react-jss';

import ViewParamsControl from 'components/ViewParamsControl';
import Grid from 'components/Grid';

const styles = {
	'@global body': {
		fontFamily: 'monospace',
	},
};

export default injectSheet(styles)(function({classes}: {classes: Object}) {
	return (
		<div>
			<ViewParamsControl />
			<Grid />
		</div>
	);
});
