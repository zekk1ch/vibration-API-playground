import './styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
const isBasePath = /^\/(vibration-API-playground\/)?$/.test(location.pathname);

ReactDOM.render((
    <BrowserRouter basename={isBasePath ? location.pathname : '/'}>
        <Route component={App}/>
    </BrowserRouter>
), document.getElementById('app'));

addEventListener('load', () => {
    if (isBasePath) {
        navigator.serviceWorker.register(`${location.pathname}sw.js`);
    }
});
