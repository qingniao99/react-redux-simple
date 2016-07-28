/**
 * Created by qingniao99 on 2016/7/27.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import ReverseComponents from './components/reverse'
import reverseReducer from './reducers/reverse'
import reverseAction from "./actions/reverse"
import actionType from "./constants/constant"

const store = createStore(reverseReducer)
const rootEl = document.getElementById('root')

function render() {
    ReactDOM.render(
        <ReverseComponents
            value={store.getState()}
            onIncrement={() => {store.dispatch(reverseAction(actionType.reverse1))}}
        />,
        rootEl
    )
}

render()
store.subscribe(render)

