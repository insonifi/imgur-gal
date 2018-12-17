// @flow

import * as React from 'react';
import injectSheet from 'react-jss';

const styles = {
	votes: {
		color: 'white',
		fontFamily: 'monospace',
		padding: 8,
	},
	up: {
		composes: '$votes',
		backgroundColor: 'darkgreen',
		borderRadius: [[16, 0, 0, 16]],
	},
	down: {
		composes: '$votes',
		backgroundColor: 'firebrick',
		borderRadius: [[0, 16, 16, 0]],
	},
};

type Props = {
	classes: Object,
	up: number,
	down: number,
};

function Votes({classes, up, down}: Props) {
	return (
		<>
			<span className={classes.up}>{up}</span>
			<span className={classes.down}>{down}</span>
		</>
	);
}

export default injectSheet(styles)(Votes);
