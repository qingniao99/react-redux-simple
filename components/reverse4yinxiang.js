/**
 * Created by qingniao99 on 2016/8/2.
 */
var React = require('react');
var Reverse4yinxiang = React.createClass({
    getInitialState: function () {
        console.log(this.props.yinxiang)
        return {};
    },

    render: function () {
        var actions = this.props.actions;
        var yinxiang = this.props.yinxiang;
        var data = yinxiang.data;

        return (
            <section className="tags" id="indexTag">
                <h2>给景区添加标签</h2>
                {data.map(function (v, i) {
                    return <Reverse4yinxiangchild key={i} title={v.title} actions={actions} value={v.value} id={v.id} data={data}/>
                })}
            </section>
        );
    }
});

var Reverse4yinxiangchild = React.createClass({
    handler: function (a) {
        var actions = this.props.actions;
        var data = this.props.data;
        for (var i = 0; i < data.length; i++) {
            data[i].value = 0;
        }
        for (var i = 0; i < data.length; i++) {
            if (data[i].id == a) {
                data[i].value = 1;
            }
        }
        actions.yinxiang(data);
    },
    render: function () {
        var title = this.props.title;
        var value = this.props.value;
        var id = this.props.id;

        if (value == 1) {
            return (
                <label onClick={this.handler.bind(this,id)}>
                    <input type="hidden" name="tags" value={title} className="activespan"
                           />
                    <span>{title}</span>
                </label>
            )
        } else {
            return (
                <label onClick={this.handler.bind(this,id)}>
                    <input type="hidden" name="tags" value={title} />
                    <span>{title}</span>
                </label>
            )
        }

    }
});

module.exports = Reverse4yinxiang;