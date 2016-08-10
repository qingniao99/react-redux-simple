/**
 * Created by qingniao99 on 2016/8/9.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var thunkMiddleware = require("redux-thunk").default;
var createLogger = require("redux-logger");
var createStore = require("redux").createStore;
var applyMiddleware = require("redux").applyMiddleware;
var Provider = require("react-redux").Provider;
var preState = require("./store/reverse4.store.js");
var reverseReducer = require("./reducers/reverse4");
var store = createStore(reverseReducer,preState,applyMiddleware(thunkMiddleware, createLogger()));
var App = require("./containers/reverse5");
var Reverse5score = require("./components/reverse5score");
var Reverse5yinxiang = require("./components/reverse5yinxiang");
var Reverse5img = require("./components/reverse5img");
var Reverse5vedio = require("./components/reverse5vedio");
var Reverse5submit = require("./components/reverse5submit");
var Reverse5douban = require("./components/reverse5douban");
var Links = require("./components/link");
import { hashHistory, Router, Route, Link ,IndexRoute} from 'react-router'

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Links} />
                <Route path="/Reverse5img" component={Reverse5img} />
                <Route path="/Reverse5vedio" component={Reverse5vedio} />
                <Route path="/Reverse5score" component={Reverse5score} />
                <Route path="/Reverse5yinxiang" component={Reverse5yinxiang} />
                <Route path="/Reverse5submit" component={Reverse5submit} />
                <Route path="/Reverse5douban" component={Reverse5douban} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)

