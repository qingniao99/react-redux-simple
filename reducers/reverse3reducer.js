/**
 * Created by qingniao99 on 2016/7/29.
 */
var actionType= require("../constants/constant");
var stateDefault = {value:0};

var reverse = function(state, action) {
    var state = state || stateDefault;
    switch (action.type) {
        case actionType.reverse1:
            return Object.assign({}, state, {value: ++action.data});
        case actionType.reverse2:
            return Object.assign({}, state, {value: --action.data});
        default:
            return state
    }
}
module.exports = reverse;