/**
 * Created by qingniao99 on 2016/7/27.
 */

var React = require('react');
var ReactDOM = require('react-dom');
var createStore = require("redux").createStore;
var Provider = require("react-redux").Provider;
var App = require("./containers/reverse3");
var store = require("./store/reverse3");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

