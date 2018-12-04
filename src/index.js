import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/css/index.css';
import App from './App';
import './assets/css/fonts.css'
import Landing from './components/Landing';
import configureStore from './store/configStore';
import generateInitialState from './store/initState';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

const run = () => {
    const config = configureStore(generateInitialState());
    ReactDOM.render(<Provider store={config}><BrowserRouter><Landing /></BrowserRouter></Provider>, document.getElementById('root'));
    serviceWorker.register();
};

document.addEventListener('DOMContentLoaded', run);


// If you want your app to work offline and load faster, you can change
// Learn more about service workers: http://bit.ly/CRA-PWA
