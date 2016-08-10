/**
 * Created by qingniao99 on 2016/7/29.
 */
var React = require('react');
var bindActionCreators = require("redux").bindActionCreators;
var connect = require('react-redux').connect;
var reverseAction = require("../actions/reverse4");


var App = React.createClass({
    render:function(){
        return (
            <div>
                {this.props.children && React.cloneElement(this.props.children, {
                    img: this.props.img,
                    vedio: this.props.vedio,
                    score: this.props.score,
                    yinxiang: this.props.yinxiang,
                    submit: this.props.submit,
                    douban: this.props.douban,
                    actions: this.props.actions
                })}
            </div>
        )
    }
});

function mapStateToProps(state) {
    window.zhongchoustore = state;//粗暴
    return {
        img: state.img,
        vedio: state.vedio,
        score: state.score,
        yinxiang: state.yinxiang,
        submit:state.submit,
        douban:state.douban
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(reverseAction, dispatch)
    }
}

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
