import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { Config }from './config/const';


ReactDOM.render((
    <BrowserRouter>
        <App name={Config.AppName} defaultLang={Config.defaultLanguage}/>
    </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
