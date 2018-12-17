// @flow

const handleJson = r => {
	if (r.ok) {
		return r.json();
	} else {
		console.log(r.url, r.status);

		return {success: false};
	}
};

export function getGallery(query: Object) {
	const url = new URL('/gallery', window.location.origin);

	url.search = new URLSearchParams(query).toString();

	return fetch(url).then(handleJson, console.log);
}

export function getImage(id: string) {
	const url = new URL('/image', window.location.origin);

	url.search = new URLSearchParams({id}).toString();

	return fetch(url).then(handleJson, console.log);
}
