import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/app.scss';

import MainLayout from './components/mainLayout.js';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { log4j2confapp } from './reducers/index.js'

import store from "./store"

var content = <Provider store={store}>
	            <MainLayout />
	          </Provider>

render( content, document.getElementById('app'));
