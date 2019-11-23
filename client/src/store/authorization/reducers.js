import {
    AUTH_CHANGE_LOGIN_TEXT,
    AUTH_CHANGE_PASSWORD_TEXT,
    AUTH_CHANGE_THUNK_HAS_ERRORED,
    AUTH_CHANGE_THUNK_IS_LOADING
} from './actions'

const initialState = {
    login: '',
    password: '',
    jwt: {
        asdasd:'',
        asddsa:''
    },
    thunk: {
        hasErrored: false,
        isLoading: false
    }
}

export const authorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_CHANGE_LOGIN_TEXT:
            return {
                ...state,
                login: action.payload.login
            }
        case AUTH_CHANGE_PASSWORD_TEXT:
            return {
                ...state,
                password: action.payload.password
            }
        case AUTH_CHANGE_THUNK_HAS_ERRORED:
            return {
                ...state,
                thunk: {
                    ...state.thunk,
                    hasErrored: !state.thunk.hasErrored
                }
            }
        case AUTH_CHANGE_THUNK_IS_LOADING:
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