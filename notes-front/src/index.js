import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Config }from './config/const';
import AppStyle from './App.css';


ReactDOM.render((
    <BrowserRouter>
        <MuiThemeProvider >
        <App name={Config.AppName} style={AppStyle} defaultLang={Config.defaultLanguage} />
        </MuiThemeProvider>
    </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
