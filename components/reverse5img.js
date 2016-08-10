/**
 * Created by qingniao99 on 2016/8/2.
 */
var React = require('react');
var Reverse4img = React.createClass({
    getInitialState: function() {console.log(this.props.img)
        return {};
    },

    render: function() {
        var img = this.props.img.src;
        var title = this.props.img.title;
        return (
            <section id="tabPic">
                <ul id="picList">
                    <li><img src={img} /></li>
                </ul>
                <section className="picMask">
                    <p>{title}</p>
                    <nav>
                        <a href="javascript:;" className="active"></a>
                    </nav>
                </section>
            </section>
        );
    }
});

module.exports = Reverse4img;