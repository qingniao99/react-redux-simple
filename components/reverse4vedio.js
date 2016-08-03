/**
 * Created by qingniao99 on 2016/8/2.
 */
var React = require('react');
var Reverse4img = React.createClass({
    getInitialState: function() {console.log(this.props.vedio)
        return {};
    },

    render: function() {
        var vedio = this.props.vedio.src;
        var title = this.props.vedio.title;
        return (
            <section id="tabPic2">
                <ul id="picList2">
                    <li><video controls="controls" src={vedio} title={title}></video></li>
                </ul>
            </section>
        );
    }
});

module.exports = Reverse4img;