import * as actinTypes from '../actions/actionTypes'

export function userInfo(state = {},action) {
    switch (action.type){
        case actinTypes.USER_INFO:
            return {
                ...state,
                userInfo: action.payload.userInfo
            }
        default:
            return state
    }
}