var actionType= require("../constants/constant");
var stateDefault ={
    title: "img",
    data: "../img/1.jpg"
};

var img = function(state, action) {
    var state = state || stateDefault;
    switch (action.type) {
        case actionType.yinxiang:
            return action.data;
        default:
            return state
    }
}
module.exports = img;