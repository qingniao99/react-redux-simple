/**
 * Created by qingniao99 on 2016/7/28.
 */
var React = require('react');
var reverse = React.createClass({
    getInitialState: function () {
        return {

        };
    },
    componentDidMount: function () {

    },
    render:function(){
        console.log(this.props.value);
        if(this.props.value%2 == 0){
            return (
                <p onClick={this.props.onIncrement}>
                    "huangjianqiang"
                </p>
            )
        }else{
            return (
                <p onClick={this.props.onIncrement}>
                    "gnaiqnaijgnauh"
                </p>
            )
        }
    }
});
module.exports = reverse;