/**
 * Created by qingniao99 on 2016/8/2.
 */
var React = require('react');
var Reverse4yinxiang = React.createClass({
    getInitialState: function() {console.log(this.props.yinxiang)
        return {};
    },

    render: function() {
        return (
            <section className="tags" id="indexTag">
                <h2>给景区添加标签</h2>
                <label>
                    <input type="radio" name="tags" value="服务好" />
                    <span>服务好</span>
                </label>
                <label>
                    <input type="radio" name="tags" value="景色赞" />
                    <span>景色赞</span>
                </label>
                <label>
                    <input type="radio" name="tags" value="千篇一律" />
                    <span>千篇一律</span>
                </label>
                <label>
                    <input type="radio" name="tags" value="看人海" />
                    <span>看人海</span>
                </label>
                <label>
                    <input type="radio" name="tags" value="挤爆了" />
                    <span>挤爆了</span>
                </label>
                <label>
                    <input type="radio" name="tags" value="服务好" />
                    <span>服务好</span>
                </label>
                <label>
                    <input type="radio" name="tags" value="景色赞" />
                    <span>景色赞</span>
                </label>
                <label>
                    <input type="radio" name="tags" value="千篇一律" />
                    <span>千篇一律</span>
                </label>
                <label>
                    <input type="radio" name="tags" value="看人海" />
                    <span>看人海</span>
                </label>
                <label>
                    <input type="radio" name="tags" value="挤爆了" />
                    <span>挤爆了</span>
                </label>
            </section>
        );
    }
});

module.exports = Reverse4yinxiang;