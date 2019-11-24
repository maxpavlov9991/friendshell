import {
    AUTH_SET_STATUS_IS_LOADING,
    AUTH_SET_STATUS_HAS_ERRORED,
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
        case AUTH_SET_STATUS_HAS_ERRORED:
            return {
                ...state,
                status: 'hasErrored'
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