/**
 * Created by qingniao99 on 2016/7/27.
 */

var React = require('react');
var ReactDOM = require('react-dom');
var createStore = require("redux").createStore;
var ReverseComponents = require("./components/reverse2");
var reverseReducer = require("./reducers/reverse2");
var reverseAction = require("./actions/reverse2");
var actionType = require("./constants/constant");

const store = createStore(reverseReducer)
const rootEl = document.getElementById('root')

function render() {
    ReactDOM.render(
        <ReverseComponents
            value={store.getState()}
            onIncrement={function(){store.dispatch(reverseAction(actionType.reverse1));}}
        />,
        rootEl
    )
}

render()
store.subscribe(render)

