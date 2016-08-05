/**
 * Created by qingniao99 on 2016/8/4.
 */
var React = require('react');
var Reverse4douban = React.createClass({
    getInitialState: function() {console.log(this.props.douban)
        return {};
    },
    handler:function(){
        var actions = this.props.actions;
        actions.douban();
    },
    render: function() {
        var submit = this.props.douban;
        return (<div>
            <div className="submitr" onClick={this.handler}>{submit.fetching?"fetch结束":"未开始"}</div>
                <ul>
                    <li>{"binding:"+submit.binding}</li>
                    <li>{"image:"+submit.image}</li>
                    <li>{"price:"+submit.price}</li>
                </ul>
            </div>
        );
    }
});

module.exports = Reverse4douban;