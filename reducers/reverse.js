/**
 * Created by hzhuangjianqiang on 2016/7/28.
 */
import actionType from "../constants/constant"
export default function reverse(state = 0, action) {
    switch (action.type) {
        case actionType.reverse1:
            return state + 1
        case actionType.reverse2:
            return state - 1
        default:
            return state
    }
}