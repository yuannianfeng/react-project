import * as actionTypes from './actionTypes'

export function userInfo(userInfo){
    return {
        type: actionTypes.USER_INFO,
        payload:{
            userInfo:userInfo
        }
    }
}