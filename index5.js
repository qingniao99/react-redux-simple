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

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

