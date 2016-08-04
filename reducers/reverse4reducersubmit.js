/**
 * Created by qingniao99 on 2016/8/4.
 */
require('babel-polyfill');
var actionType= require("../constants/constant");
var stateDefault ={
    title:"点我提交",
    url:"https://m.8.163.com/m/login.htm?redirectUrl=http%3A%2F%2F10.240.92.169%3A6789%2Fhtml%2Findex4.html%3Flogin%3D1"
};

var submit = function(state, action) {
    var state = state || stateDefault;
    switch (action.type) {
        case actionType.yinxiang:
            return Object.assign({}, state, {url: action.data});
        default:
            return state
    }
}
module.exports = submit;