// @flow

import * as React from 'react';
import injectSheet from 'react-jss';
import noop from 'lodash/fp/noop';
import getOr from 'lodash/fp/getOr';

import type {RequestAction, ImageIndex} from 'containers/Images/types';

const styles = {
	album: {
		border: '1px solid lightgray',
		borderRadius: 4,
		width: 300,
		position: 'relative',
		'&:hover $caption': {
			display: 'block',
		},
	},
	image: {
		display: 'flex',
		backgroundColor: 'lightgray',
		alignItems: 'center',
		objectFit: 'cover',
		width: 300,
		height: 300,
		'&::after': {
			content: '"○"',
			fontSize: 100,
			position: 'absolute',
			left: '50%',
			top: '50%',
			transform: 'translate(-50%, -50%)',
		},
	},
	caption: {
		display: 'none',
		padding: 8,
		position: 'absolute',
		bottom: 8,
		width: '100%',
		backgroundColor: 'rgba(255, 255, 255, 0.5)',
		textAlign: 'center',
	},
};

type Props = {
	album: Object,
	classes: Object,
	images: ImageIndex,
	onClick: Function,
	requestImage: RequestAction,
};

const getImage = getOr({link: ''});

function Album({classes, album, images, onClick, requestImage}: Props) {
	const image = getImage(album.cover, images);

	React.useEffect(
		() => {
			requestImage(album.cover);

			return noop;
		},
		[album.id]
	);

	return (
		<figure className={classes.album} onClick={onClick}>
			<img className={classes.image} src={image.link} />
			<figcaption className={classes.caption}>{album.title}</figcaption>
		</figure>
	);
}

export default injectSheet(styles)(Album);
