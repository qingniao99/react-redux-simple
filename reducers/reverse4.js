/**
 * Created by hzhuangjianqiang on 2016/7/28.
 */
var combineReducers = require('redux').combineReducers;
var score = require("./reverse4reducerscore");
var yinxiang = require("./reverse4reduceryinxiang");
var img = require("./reverse4reducerimg");
var vedio = require("./reverse4reducervedio");

var rootReducer = combineReducers({
    score,
    yinxiang,
    img,
    vedio
});

module.exports = rootReducer;