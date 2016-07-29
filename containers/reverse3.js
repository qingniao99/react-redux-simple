/**
 * Created by qingniao99 on 2016/7/29.
 */
var React = require('react');
var bindActionCreators = require("redux").bindActionCreators;
var connect = require('react-redux').connect;
var ReverseComponents = require("../components/reverse3");
var reverseAction = require("../actions/reverse3");

var App = React.createClass({
    render:function(){
        return (
            <div>
                <ReverseComponents value={this.props.value} actions={this.props.actions} />
            </div>
        )
    }
});

function mapStateToProps(state) {
    return {
        value: state.value
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
