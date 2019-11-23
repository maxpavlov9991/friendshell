export const AUTH_CHANGE_LOGIN_TEXT = 'AUTH_CHANGE_LOGIN_TEXT'
export const AUTH_CHANGE_PASSWORD_TEXT = 'AUTH_CHANGE_PASSWORD_TEXT'
export const AUTH_CHANGE_THUNK_HAS_ERRORED = 'AUTH_CHANGE_THUNK_HAS_ERRORED'
export const AUTH_CHANGE_THUNK_IS_LOADING = 'AUTH_CHANGE_THUNK_IS_LOADING'

export const changeLoginText = (login) => ({
    type: AUTH_CHANGE_LOGIN_TEXT,
    payload: {
        login: login
    }
})

export const changePasswordText = (password) => ({
    type: AUTH_CHANGE_PASSWORD_TEXT,
    payload: {
        password: password
    }
})

export const changeThunkHasErrored = () => ({
    type: AUTH_CHANGE_THUNK_HAS_ERRORED
})

export const changeThunkIsLoading = () => ({
    type: AUTH_CHANGE_THUNK_IS_LOADING
})