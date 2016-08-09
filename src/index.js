import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import MainContent from './containers/MainContent/MainContent';
import PostDetail from './containers/PostDetail/PostDetail'
import { Provider } from 'react-redux';
import { Router, Route, browserHistory ,IndexRoute} from 'react-router';
import './css/index.css';
import createStore from './store/enhancedstore';

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={MainContent}  />
                <PostDetail path="/postdetail/:id" component={PostDetail} />
            </Route>
        </Router>
    </Provider>
    , document.getElementById('root')
);
