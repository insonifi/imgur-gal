// @flow

import * as React from 'react';
import injectSheet from 'react-jss';

const styles = {
	score: {
		backgroundColor: 'black',
		borderRadius: '25%',
		color: 'white',
		fontFamily: 'monospace',
		margin: 4,
		padding: 8,
	},
};

type Props = {
	score: number,
};

function Score({classes, score}: Props) {
	return <span className={classes.score}>{score}</span>;
}

export default injectSheet(styles)(Score);
