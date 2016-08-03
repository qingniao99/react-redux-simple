require('babel-polyfill');
var actionType= require("../constants/constant");
var stateDefault ={
    title: "yinxiang",
    data: [
        {title: "服务好", value: 0,id:0},
        {title: "景色赞", value: 0,id:1},
        {title: "千篇一律", value: 0,id:2},
        {title: "看人海", value: 0,id:3},
        {title: "挤爆了", value: 0,id:4},
        {title: "有病", value: 0,id:5},
        {title: "你胸大你说的对", value: 0,id:6},
        {title: "你咬我啊", value: 0,id:7},
        {title: "到此一游", value: 0,id:8}
    ]
};

var yinxiang = function(state, action) {
    var state = state || stateDefault;
    switch (action.type) {
        case actionType.yinxiang:
            return Object.assign({}, state, {data: action.data});
        default:
            return state
    }
}
module.exports = yinxiang;