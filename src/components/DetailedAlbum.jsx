// @flow

import * as React from 'react';
import {compose} from 'redux';
import injectSheet from 'react-jss';

import type {Image} from 'containers/Images/types';
import Score from 'components/Score';
import Votes from 'components/Votes';

const styles = {
	backdrop: {
		background: 'rgba(0,0,0,0.85)',
		display: 'flex',
		position: 'fixed',
		zIndex: 2,
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
	},
	box: {
		background: 'lightgray',
		borderRadius: 8,
		display: 'flex',
		flexDirection: 'column',
		flexGrow: 1,
		width: 'inherit',
		height: 'inherit',
		margin: 16,
		overflow: 'hidden',
	},
	desc: {
		margin: 16,
	},
	imageBox: {
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
	},
	image: {
		flex: 1,
		objectFit: 'contain',
		backgroundColor: 'gray',
	},
	title: {
		display: 'flex',
		alignItems: 'center',
		margin: 0,
		padding: 8,
	},
	titleText: {
		flexGrow: 1,
		textAlign: 'center',
	},
};

type Props = {
	classes: Object,
	album: Object | null,
	image: Image,
	onClose: Function,
	open: boolean,
};

function DetailedAlbum({classes, album, image, onClose}: Props) {
	if (!(album && image)) {
		return null;
	}

	return (
		<div className={classes.backdrop} onClick={onClose}>
			<div className={classes.box}>
				<h1 className={classes.title}>
					<Score score={album.score} />
					<span className={classes.titleText}>{album.title}</span>
					<Votes up={album.ups} down={album.downs} />
				</h1>
				<div className={classes.imageBox}>
					<img className={classes.image} src={image.link} />
				</div>
				<p className={classes.desc}>{image.description}</p>
			</div>
		</div>
	);
}

export default injectSheet(styles)(DetailedAlbum);
