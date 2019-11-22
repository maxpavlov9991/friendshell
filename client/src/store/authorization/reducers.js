import {
    AUTH_CHANGE_LOGIN_TEXT,
    AUTH_CHANGE_PASSWORD_TEXT,
} from './actions'

const initialState = {
    auth: {
        login: '',
        password: '',
        jwt: {
            asdasd:'',
            asddsa:''
        }
    },
    hasErrored: false,
    isLoading: false
}

export const authorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_CHANGE_LOGIN_TEXT:
            return {
                ...state,
                login: action.payload
            }
        case AUTH_CHANGE_PASSWORD_TEXT:
            return {
                ...state,
                password: action.payload
            }
        default:
            return state
    }
}