/**
 * Created by hzhuangjianqiang on 2016/7/28.
 */

var actionType= require("../constants/constant");
var reverse = function(state, action) {
    var state = state || 0;
    switch (action.type) {
        case actionType.reverse1:
            return state + 1
        case actionType.reverse2:
            return state - 1
        default:
            return state
    }
}
module.exports = reverse;