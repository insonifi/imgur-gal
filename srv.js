const serve = require('koa-static');
const route = require('koa-route');
const Koa = require('koa');
const fetch = require('node-fetch');
const path = require('path');
const app = new Koa();
const {clientId, clientSecret} = require('./config.json');

app.use(route.get('/gallery', gallery));
app.use(route.get('/image', images));
app.use(serve(path.join(__dirname, 'public')));

const API = 'https://api.imgur.com/3';
const PORT = 8080;

app.listen(PORT);
console.log(`listening on port ${PORT}`);

async function gallery(ctx, next) {
	const {
		section = 'hot',
		sort = 'top',
		page = 0,
		window = 'day',
	} = ctx.request.query;
	const uri = new URL([API, 'gallery', section, sort, page].join('/'));
	let response;

	try {
		response = await fetch(uri, {
			headers: {
				'If-None-Match': ctx.request.headers['If-None-Match'],
				Authorization: `Client-ID ${clientId}`,
			},
		});
	} catch (e) {
		console.log(e);
		ctx.response.status = 500;
		ctx.response.body = await response.json();

		return;
	}

	ctx.response.status = response.status;
	ctx.response.headers = response.headers;
	ctx.response.body = await response.json();
}

async function images(ctx, next) {
	const {id} = ctx.request.query;
	const uri = new URL([API, 'image', id].join('/'));
	let response;

	try {
		response = await fetch(uri, {
			headers: {
				'If-None-Match': ctx.request.headers['If-None-Match'],
				Authorization: `Client-ID ${clientId}`,
			},
		});
	} catch (e) {
		console.log(e);
		ctx.response.status = 500;
		ctx.response.body = await response.json();

		return;
	}

	ctx.response.status = response.status;
	ctx.response.headers = response.headers;
	ctx.response.body = await response.json();
}
