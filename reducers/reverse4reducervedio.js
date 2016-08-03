/**
 * Created by qignniao99 on 2016/8/3.
 */
var actionType= require("../constants/constant");
var stateDefault ={
    title: "盗墓笔记",
    data: "../img/6666.mp4"
};

var vedio = function(state, action) {
    var state = state || stateDefault;
    switch (action.type) {
        case actionType.vedio:
            return action.data;
        default:
            return state
    }
}
module.exports = vedio;