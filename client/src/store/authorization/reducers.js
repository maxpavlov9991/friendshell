import {
    AUTH_SET_STATUS_IS_LOADING,
    AUTH_SET_STATUS_FAILED,
    AUTH_SET_STATUS_NORMAL,
    AUTH_SET_MESSAGE
} from './actions'

const initialState = {
    status: 'normal',
    message: ''
}

export const authorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SET_STATUS_IS_LOADING:
            return {
                ...state,
                status: 'isLoading'
            }
        case AUTH_SET_STATUS_FAILED:
            return {
                ...state,
                status: 'Fail...'
            }
        case AUTH_SET_STATUS_NORMAL:
            return {
                ...state,
                status: 'normal'
            }
        case AUTH_SET_MESSAGE:
            return {
                ...state,
                message: action.payload.message
            }
        default:
            return state
    }
}