/**
 * Created by qingniao99 on 2016/8/10.
 */
/**
 * Created by qingniao99 on 2016/7/29.
 */
var React = require('react');
var Link = require('react-router').Link
var link = React.createClass({
    render:function(){
        return (
            <div className="floata">
                <Link to="/Reverse5img">{"img"}</Link>
                <Link to="/Reverse5vedio">{"video"}</Link>
                <Link to="/Reverse5score">{"score"}</Link>
                <Link to="/Reverse5yinxiang">{"yinxiang"}</Link>
                <Link to="/Reversesubmit">{"denglu"}</Link>
                <Link to="/Reverse5douban">{"豆瓣"}</Link>
            </div>
        )
    }
});

module.exports = link;