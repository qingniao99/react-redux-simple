require('babel-polyfill');
var actionType= require("../constants/constant");
var stateDefault = {
    "fetching":false,
    "binding": "",
    "image": "",
    "price": ""
}

var douban = function(state, action) {
    var state = state || stateDefault;
    switch (action.type) {
        case actionType.doubanTrue:
            return Object.assign({}, state, {fetching:true,binding: action.res.binding,image: action.res.image,price: action.res.price});
        case actionType.doubanFalse:
            return state
        default:
            return state
    }
}
module.exports = douban;