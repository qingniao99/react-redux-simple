/**
 * Created by qingniao99 on 2016/7/28.
 */
var actionType= require("../constants/constant");

var reverse = function (data) {console.log(data);
    return {type: actionType.reverse1, data}
}

module.exports.reverse = reverse;