require('babel-polyfill');
var actionType= require("../constants/constant");
var stateDefault = {
    title: "score",
    data: [{score: 0,title:"综合印象",id:0}, {score: 0,title:"服务指数",id:1}, {score: 0,title:"消费指数",id:2}]
}

var score = function(state, action) {
    var state = state || stateDefault;
    switch (action.type) {
        case actionType.score:
            return Object.assign({}, state, {data: action.data});
        default:
            return state
    }
}
module.exports = score;