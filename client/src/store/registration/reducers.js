import {
    REGISTRATION_CHANGE_LOGIN_TEXT,
    REGISTRATION_CHANGE_EMAIL_TEXT,
    REGISTRATION_CHANGE_PASSWORD_TEXT
} from './actions'

const initialState = {
    login: '',
    email: '',
    password: ''
}

export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION_CHANGE_LOGIN_TEXT:
            return {
                ...state,
                login: action.payload
            }
        case REGISTRATION_CHANGE_EMAIL_TEXT:
            return {
                ...state,
                email: action.payload
            }
        case REGISTRATION_CHANGE_PASSWORD_TEXT:
            return {
                ...state,
                password: action.payload
            }
        default:
            return state
    }
}