import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import configureStore from './configureStore';
import MuiThemeProvider from  '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from  '@material-ui/core/styles/createMuiTheme'


const mainStore = configureStore();
const theme = createMuiTheme();

ReactDOM.render(

    <MuiThemeProvider theme={theme}>
        <Provider store={mainStore}>
            <App/>
        </Provider>
    </MuiThemeProvider>,


    document.getElementById('root')
);
registerServiceWorker();