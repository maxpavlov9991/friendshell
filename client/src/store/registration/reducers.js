import {
    REGISTRATION_SET_STATUS_IS_LOADING,
    REGISTRATION_SET_STATUS_FAILED,
    REGISTRATION_SET_STATUS_NORMAL,
    REGISTRATION_SET_MESSAGE
} from './actions'

const initialState = {
    status: '',
    message: ''
}

export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION_SET_STATUS_IS_LOADING:
            return {
                ...state,
                status: 'Loading...'
            }
        case REGISTRATION_SET_STATUS_FAILED:
            return {
                ...state,
                status: 'Fail...'
            }
        case REGISTRATION_SET_STATUS_NORMAL:
            return {
                ...state,
                status: ''
            }
        case REGISTRATION_SET_MESSAGE:
            return {
                ...state,
                message: action.payload.message
            }
        default:
            return state
    }
}