/**
 * Created by qingniao99 on 2016/7/29.
 */
var React = require('react');
var bindActionCreators = require("redux").bindActionCreators;
var connect = require('react-redux').connect;
var Reverse4score = require("../components/reverse4score");
var Reverse4yinxiang = require("../components/reverse4yinxiang");
var Reverse4img = require("../components/reverse4img");
var Reverse4vedio = require("../components/reverse4vedio");
var Reverse4submit = require("../components/reverse4submit");
var Reverse4douban = require("../components/reverse4douban");
var reverseAction = require("../actions/reverse4");

var App = React.createClass({
    render:function(){
        return (
            <div>
                <Reverse4img img={this.props.img} actions={this.props.actions} />
                <Reverse4vedio vedio={this.props.vedio} actions={this.props.actions} />
                <Reverse4score score={this.props.score} actions={this.props.actions} />
                <Reverse4yinxiang yinxiang={this.props.yinxiang} actions={this.props.actions} />
                <Reverse4submit submit={this.props.submit} actions={this.props.actions} />
                <Reverse4douban douban={this.props.douban} actions={this.props.actions} />
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
