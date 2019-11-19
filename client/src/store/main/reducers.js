import {
    MAIN_CHANGE_TOURNAMENT_NAME,
    MAIN_CHANGE_TOURNAMENT_DESCRIBE,
} from './actions'

const defaultState = {
    tournamentName: '',
    tournamentDescribe: ''
}

export const mainReducer = (state = defaultState, action) => {
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