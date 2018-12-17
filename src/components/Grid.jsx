// @flow

import * as React from 'react';
import {compose} from 'redux';
import injectSheet from 'react-jss';
import get from 'lodash/fp/get';

import {withList} from 'containers/List';
import {withImages} from 'containers/Images';
import Album from 'components/Album';
import DetailedAlbum from 'components/DetailedAlbum';

type Props = {
	classes: Object,
	list: Array<*>,
	images: Map<string, Object>,
	requestImage: Function,
};

const styles = {
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	pending: {
		fontSize: 200,
		color: 'lightgray',
	},
};
const EMPTY = {};

function Grid({classes, list, images, requestImage}: Props) {
	const [selected, setSelected] = React.useState(EMPTY);
	const clearSelected = React.useCallback(() => setSelected(EMPTY));
	const selectedImage = get(selected.cover, images);

	return (
		<>
			<div className={classes.container}>
				{!list.length && <div className={classes.pending}>○</div>}
				{list.map(album => {
					const handleSelect = React.useCallback(() => setSelected(album), [
						album,
					]);

					return (
						<Album
							key={album.id}
							onClick={handleSelect}
							{...{album, images, requestImage}}
						/>
					);
				})}
			</div>
			<DetailedAlbum
				album={selected}
				image={selectedImage}
				onClose={clearSelected}
			/>
		</>
	);
}

export default compose(
	injectSheet(styles),
	withList,
	withImages
)(Grid);
