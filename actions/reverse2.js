/**
 * Created by qingniao99 on 2016/7/28.
 */
var actionType= require("../constants/constant");

var reverse = function (type,data) {
    switch (type) {
        case actionType.reverse1:
            return {type:actionType.reverse1}
        case actionType.reverse2:
            return {type:actionType.reverse1}
        default:
            return {type:actionType.reverse1}
    }
}
module.exports = reverse;