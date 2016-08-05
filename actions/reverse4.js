/**
 * Created by qingniao99 on 2016/7/28.
 */
import $ from "jquery";//试了好多种fetch,要么跨域，要么res不对，要么自动加端口号，已经无力吐槽，还是jq基友万能。。。

var actionType = require("../constants/constant");

var score = function (data) {
    return {type: actionType.score, data}
}
var yinxiang = function (data) {
    return {type: actionType.yinxiang, data}
}
var img = function (data) {
    return {type: actionType.img, data}
}
var vedio = function (data) {
    return {type: actionType.vedio, data}
}
var submit = function (data) {
    return {type: actionType.submit, data}
}
var douban = function () {
    return function (dispatch) {
        dispatch({type: actionType.doubanFalse})
        $.ajax({
            url: "https://api.douban.com/v2/book/1220562",
            type: "GET",
            dataType: 'jsonp',
            success:function(res){
                console.log(res);
                dispatch({type: actionType.doubanTrue, res})
            }
        })
    }
}

module.exports.score = score;
module.exports.yinxiang = yinxiang;
module.exports.img = img;
module.exports.vedio = vedio;
module.exports.submit = submit;
module.exports.douban = douban;