/**
 * 用户模块
 */
import request from "../../utils/request";

/** 登录 */
export const login = (data) => {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}

/** 注册 */
export const register = (data)=> {
    return request({
        url: '/user/register',
        method: 'post',
        data
    })
}
/** 获取用户信息 */
export const findusers = (data)=> {
    return request({
        url: '/user/search',
        method: 'get',
        params:data
    })
} 