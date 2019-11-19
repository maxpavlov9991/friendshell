export const REGISTRATION_CHANGE_LOGIN_TEXT = 'REGISTRATION_CHANGE_LOGIN_TEXT'
export const REGISTRATION_CHANGE_EMAIL_TEXT = 'REGISTRATION_CHANGE_EMAIL_TEXT'
export const REGISTRATION_CHANGE_PASSWORD_TEXT = 'REGISTRATION_CHANGE_PASSWORD_TEXT'

export const setLoginText = (login) => ({
    type: REGISTRATION_CHANGE_LOGIN_TEXT,
    payload: login
})

export const setEmailText = (email) => ({
    type: REGISTRATION_CHANGE_EMAIL_TEXT,
    payload: email
})

export const setPasswordText = (password) => ({
    type: REGISTRATION_CHANGE_PASSWORD_TEXT,
    payload: password
})