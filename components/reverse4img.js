/**
 * Created by qingniao99 on 2016/8/2.
 */
var React = require('react');
var Reverse4img = React.createClass({
    getInitialState: function() {console.log(this.props.img)
        return {};
    },

    render: function() {
        return (
            <section id="tabPic">
                <ul id="picList">
                    <li><img src="/img/1.jpg" /></li>
                </ul>
                <section className="picMask">
                    <p>成都九寨沟景区</p>
                    <nav>
                        <a href="javascript:;" className="active"></a>
                    </nav>
                </section>
            </section>
        );
    }
});

module.exports = Reverse4img;