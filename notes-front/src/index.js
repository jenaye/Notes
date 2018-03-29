import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Config }from './config/const';


ReactDOM.render((
    <BrowserRouter>
        <MuiThemeProvider>
        <App name={Config.AppName} defaultLang={Config.defaultLanguage}/>
        </MuiThemeProvider>
    </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
