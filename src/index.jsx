// @flow

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'babel-polyfill';

import store from 'store';
import App from 'containers/App';

const appDiv = document.createElement('div');
const portalDiv = document.createElement('div');
let body = document.querySelector('body');

if (!body) {
	body = document.createElement('body');
	document.appendChild(body);
}

body.appendChild(appDiv);
body.appendChild(portalDiv);
portalDiv.id = 'portal';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	appDiv
);
