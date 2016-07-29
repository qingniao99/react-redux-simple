/**
 * Created by qingniao99 on 2016/7/29.
 */
var reverseReducer = require("../reducers/reverse3");
var createStore = require("redux").createStore;

var store = function(preStore){
    return createStore(reverseReducer,preStore);
}
module.exports = store();