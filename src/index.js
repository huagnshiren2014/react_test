import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'whatwg-fetch';
import 'es6-promise';

import configureStore from './store/configureStore';

import RouteMap from './router/routers';

import registerServiceWorker from './registerServiceWorker';

import { getData, postData } from './fetch/data.js';

const store = configureStore();

getData();
postData(); 

render(
    <Provider store={store}> 
        <RouteMap /> 
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
