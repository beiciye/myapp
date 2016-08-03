import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import './css/index.css';
import createStore from './store/enhancedstore';

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}/>
        </Router>
    </Provider>
    , document.getElementById('root')
);
