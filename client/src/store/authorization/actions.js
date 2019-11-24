export const AUTH_SET_STATUS_IS_LOADING = 'AUTH_SET_STATUS_IS_LOADING'
export const AUTH_SET_STATUS_FAILED = 'AUTH_SET_STATUS_FAILED'
export const AUTH_SET_STATUS_NORMAL = 'AUTH_SET_STATUS_NORMAL'
export const AUTH_SET_MESSAGE = 'AUTH_SET_MESSAGE'

export const setStatusIsLoading = () => ({
    type: AUTH_SET_STATUS_IS_LOADING
})

export const setStatusFailed = () => ({
    type: AUTH_SET_STATUS_FAILED
})

export const setStatusNormal = () => ({
    type: AUTH_SET_STATUS_NORMAL
})

export const setMessage = (message) => ({
    type: AUTH_SET_MESSAGE,
    payload: {
        message: message
    }
})