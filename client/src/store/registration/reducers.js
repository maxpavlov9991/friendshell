import {
    REGISTRATION_CHANGE_LOGIN_TEXT,
    REGISTRATION_CHANGE_EMAIL_TEXT,
    REGISTRATION_CHANGE_PASSWORD_TEXT,
    REGISTRATION_CHANGE_THUNK_HAS_ERRORED,
    REGISTRATION_CHANGE_THUNK_IS_LOADING
} from './actions'

const initialState = {
    login: '',
    email: '',
    password: '',
    thunk: {
        hasErrored: false,
        isLoading: false
    }
}

export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION_CHANGE_LOGIN_TEXT:
            return {
                ...state,
                login: action.payload.login
            }
        case REGISTRATION_CHANGE_EMAIL_TEXT:
            return {
                ...state,
                email: action.payload.email
            }
        case REGISTRATION_CHANGE_PASSWORD_TEXT:
            return {
                ...state,
                password: action.payload.password
            }
        case REGISTRATION_CHANGE_THUNK_HAS_ERRORED:
            return {
                ...state,
                thunk: {
                    ...state.thunk,
                    hasErrored: !state.thunk.hasErrored
                }
            }
        case REGISTRATION_CHANGE_THUNK_IS_LOADING:
            return {
                ...state,
                thunk: {
                    ...state.thunk,
                    isLoading: !state.thunk.isLoading
                }
            }
        default:
            return state
    }
}