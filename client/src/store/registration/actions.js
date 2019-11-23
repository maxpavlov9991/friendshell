export const REGISTRATION_CHANGE_LOGIN_TEXT = 'REGISTRATION_CHANGE_LOGIN_TEXT'
export const REGISTRATION_CHANGE_EMAIL_TEXT = 'REGISTRATION_CHANGE_EMAIL_TEXT'
export const REGISTRATION_CHANGE_PASSWORD_TEXT = 'REGISTRATION_CHANGE_PASSWORD_TEXT'
export const REGISTRATION_CHANGE_THUNK_HAS_ERRORED = 'REGISTRATION_CHANGE_THUNK_HAS_ERRORED'
export const REGISTRATION_CHANGE_THUNK_IS_LOADING = 'REGISTRATION_THUNK_IS_LOADING'

export const changeLoginText = (login) => ({
    type: REGISTRATION_CHANGE_LOGIN_TEXT,
    payload: {
        login: login
    }
})

export const changeEmailText = (email) => ({
    type: REGISTRATION_CHANGE_EMAIL_TEXT,
    payload: {
        email: email
    }
})

export const changePasswordText = (password) => ({
    type: REGISTRATION_CHANGE_PASSWORD_TEXT,
    payload: {
        password: password
    }
})

export const changeThunkHasErrored = () => ({
    type: REGISTRATION_CHANGE_THUNK_HAS_ERRORED
})

export const changeThunkIsLoading = () => ({
    type: REGISTRATION_CHANGE_THUNK_IS_LOADING
})