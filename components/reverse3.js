/**
 * Created by qingniao99 on 2016/7/28.
 */
var React = require('react');
var reverse = React.createClass({
    render:function(){
        if(this.props.value%2 == 0){
            return (
                <p onClick={function(){this.props.actions.reverse(this.props.value)}.bind(this)}>
                    "huangjianqiang"
                </p>
            )
        }else{
            return (
                <p onClick={function(){this.props.actions.reverse(this.props.value)}.bind(this)}>
                    "gnaiqnaijgnauh"
                </p>
            )
        }
    }
});
module.exports = reverse;