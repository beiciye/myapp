import {compose,applyMiddleware,createStore,combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger();

import {app } from '../reduers/app';
import {maincontent} from '../reduers/maincontent';
let reducer = combineReducers({
    app,
    maincontent
});

const createStoreWithMiddleware = compose (
    applyMiddleware(thunkMiddleware,logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

export default function configureStore(initialState) {
    return createStoreWithMiddleware(reducer, initialState);
}