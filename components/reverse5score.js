/**
 * Created by qingniao99 on 2016/8/2.
 */
var React = require('react');
var Reverse4score = React.createClass({
    getInitialState: function () {console.log(this.props.score)
        return {};
    },

    render: function () {
        var score = this.props.score;
        var actions = this.props.actions;
        var data = score.data;
        return (
            <section id="score">
                <h2>给景区评分</h2>
                <ul className="scoreList">
                    {score.data.map(function (menu, i) {
                        return <Reverse4scoreli key={i} menu={menu} actions={actions} data={data} id={menu.id}/>
                    })}
                </ul>
            </section>
        );
    }
});

var Reverse4scoreli = React.createClass({
    getInitialState: function () {
        return {};
    },

    render: function () {
        var title = this.props.menu.title;
        var score = this.props.menu.score;
        var actions = this.props.actions;
        var id = this.props.id;
        var data = this.props.data;
        var arr = [0,1,2,3,4];
        return(
            <li>
                <span>{title}</span>
                <nav>
                    {arr.map(function(menu,i){
                        return <Reverse4scorelia  score={score} key={i} sort={i} actions={actions} data={data} id={id}/>
                    })}
                </nav>
            </li>
        )
    }
});;
var Reverse4scorelia = React.createClass({
    getInitialState: function () {
        return {};
    },
    handler:function(a,b){
        var actions = this.props.actions;
        var data = this.props.data;
        var id = this.props.id;
        for(var i=0;i<data.length;i++){
            if(data[i].id == b){
                data[i].score = a;
            }
        }
        actions.score(data);
    },
    render: function () {
        var score = this.props.score;
        var i = this.props.sort+1;
        var id = this.props.id;
        if(i<=score){
            return (
                <a href="javascript:;" className="active" onClick={this.handler.bind(this,i,id)}></a>
            )
        }else{
            return <a href="javascript:;" onClick={this.handler.bind(this,i,id)}></a>
        }

    }
});

module.exports = Reverse4score;