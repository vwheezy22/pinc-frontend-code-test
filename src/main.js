import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App.js';
import store from './store.js';

// TODO: add Routing

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    // <Fragment>
    //     <App />
    // </Fragment>,
    document.getElementById('app')
);