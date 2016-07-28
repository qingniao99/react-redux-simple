/**
 * Created by qingniao99 on 2016/7/28.
 */
import actionType from "../constants/constant"

export default function reverse(type,data) {
    switch (type) {
        case actionType.reverse1:
            return {type:actionType.reverse1}
        case actionType.reverse2:
            return {type:actionType.reverse1}
        default:
            return {type:actionType.reverse1}
    }
}
