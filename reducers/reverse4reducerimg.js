require('babel-polyfill');
var actionType= require("../constants/constant");
var stateDefault ={
    title: "成都九寨沟景区",
    data: "../img/1.jpg"
};

var img = function(state, action) {
    var state = state || stateDefault;
    switch (action.type) {
        case actionType.img:
            return action.data;
        default:
            return state
    }
}
module.exports = img;