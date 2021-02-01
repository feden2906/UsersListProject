import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from "./Redux";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
