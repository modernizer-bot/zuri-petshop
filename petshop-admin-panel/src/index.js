import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "./store.js";
import rootSaga from "./sagas.js";

export const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
