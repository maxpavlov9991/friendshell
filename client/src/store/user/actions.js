export const USER_AUTH_SET_MY_INFO = 'USER_AUTH_SET_MY_INFO'

export const userAuthSetMyInfo = (body) => ({
    type: USER_AUTH_SET_MY_INFO,
    payload: {
        body: body
    }
})
