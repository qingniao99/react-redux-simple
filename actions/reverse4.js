/**
 * Created by qingniao99 on 2016/7/28.
 */
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
module.exports.score = score;
module.exports.yinxiang = yinxiang;
module.exports.img = img;