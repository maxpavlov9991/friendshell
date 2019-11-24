export const REGISTRATION_SET_STATUS_IS_LOADING = 'REGISTRATION_SET_STATUS_IS_LOADING'
export const REGISTRATION_SET_STATUS_FAILED = 'REGISTRATION_SET_STATUS_FAILED'
export const REGISTRATION_SET_STATUS_NORMAL = 'REGISTRATION_SET_STATUS_NORMAL'
export const REGISTRATION_SET_MESSAGE = 'REGISTRATION_SET_MESSAGE'

export const setStatusIsLoading = () => ({
    type: REGISTRATION_SET_STATUS_IS_LOADING
})

export const setStatusFailed = () => ({
    type: REGISTRATION_SET_STATUS_FAILED
})

export const setStatusNormal = () => ({
    type: REGISTRATION_SET_STATUS_NORMAL
})

export const setMessage = (message) => ({
    type: REGISTRATION_SET_MESSAGE,
    payload: {
        message: message
    }
})