export const AUTH_CHANGE_LOGIN_TEXT = 'AUTH_CHANGE_LOGIN_TEXT'
export const AUTH_CHANGE_PASSWORD_TEXT = 'AUTH_CHANGE_PASSWORD_TEXT'

export const setLoginText = (login) => ({
    type: AUTH_CHANGE_LOGIN_TEXT,
    payload: login
})

export const setPasswordText = (password) => ({
    type: AUTH_CHANGE_PASSWORD_TEXT,
    payload: password
})