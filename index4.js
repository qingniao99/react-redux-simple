/**
 * Created by qingniao99 on 2016/8/2.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var createStore = require("redux").createStore;
var Provider = require("react-redux").Provider;
var preState = require("./store/reverse4.store.js");
var reverseReducer = require("./reducers/reverse4");
var store = createStore(reverseReducer,preState);
var App = require("./containers/reverse4");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

