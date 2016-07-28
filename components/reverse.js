/**
 * Created by qingniao99 on 2016/7/28.
 */
import React, { Component, PropTypes } from 'react'
class reverse extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {onIncrement,value} = this.props
        if(this.props.value%2 == 0){
            return (
                <p onClick={onIncrement}>
                    "huangjianqiang"
                </p>
            )
        }else{
            return (
                <p onClick={onIncrement}>
                    "gnaiqnaijgnauh"
                </p>
            )
        }
    }
}

export default reverse
