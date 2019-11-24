import {
    REGISTRATION_SET_STATUS_IS_LOADING,
    REGISTRATION_SET_STATUS_HAS_ERRORED,
    REGISTRATION_SET_STATUS_NORMAL,
    REGISTRATION_SET_MESSAGE
} from './actions'

const initialState = {
    status: 'normal',
    message: ''
}

export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION_SET_STATUS_IS_LOADING:
            return {
                ...state,
                status: 'isLoading'
            }
        case REGISTRATION_SET_STATUS_HAS_ERRORED:
            return {
                ...state,
                status: 'hasErrored'
            }
        case REGISTRATION_SET_STATUS_NORMAL:
            return {
                ...state,
                status: 'normal'
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