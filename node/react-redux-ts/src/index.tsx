import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '@/app';
import { InitialState, reducer } from '@/modules'

const store = createStore(reducer, InitialState);

render(
	<Provider store={store}>
		<App />
	</Provider>
	,
	document.querySelector(".app")
);
