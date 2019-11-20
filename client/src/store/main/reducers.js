import {
    MAIN_CHANGE_TOURNAMENT_NAME,
    MAIN_CHANGE_TOURNAMENT_DESCRIBE,
} from './actions'

const initialState = {
    tournamentName: '',
    tournamentDescribe: ''
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case MAIN_CHANGE_TOURNAMENT_NAME:
            return {
                ...state,
                tournamentName: action.payload
            }
        case MAIN_CHANGE_TOURNAMENT_DESCRIBE:
            return {
                ...state,
                tournamentDescribe: action.payload
            }
        default:
            return state
    }
}