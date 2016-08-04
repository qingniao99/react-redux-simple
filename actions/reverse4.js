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
var vedio = function (data) {
    return {type: actionType.vedio, data}
}
var submit = function (data) {
    return {type: actionType.submit, data}
}
module.exports.score = score;
module.exports.yinxiang = yinxiang;
module.exports.img = img;
module.exports.vedio = vedio;
module.exports.submit = submit;