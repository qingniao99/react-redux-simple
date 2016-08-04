/**
 * Created by qingniao99 on 2016/8/4.
 */
var React = require('react');
var Reverse4img = React.createClass({
    getInitialState: function() {console.log(this.props.submit)
        return {};
    },
    handler:function(){
        if(!/login/gi.test(location.href)){
            alert(JSON.stringify({score:window.zhongchoustore.score,yinxiang:window.zhongchoustore.yinxiang}));
            window.location.href="https://m.8.163.com/m/login.htm?redirectUrl=http%3A%2F%2F10.240.92.169%3A6789%2Fhtml%2Findex4.html%3Flogin%3D1";
        }
    },
    render: function() {
        var submit = this.props.submit;
        return (
            <div className="submitr" onClick={this.handler}>{submit.title}</div>
        );
    }
});

module.exports = Reverse4img;