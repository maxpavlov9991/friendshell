export const MAIN_CHANGE_TOURNAMENT_NAME = 'MAIN_CHANGE_TOURNAMENT_NAME'
export const MAIN_CHANGE_TOURNAMENT_DESCRIBE = 'MAIN_CHANGE_TOURNAMENT_DESCRIBE'

export const setTournamentName = (name) => ({
    type: MAIN_CHANGE_TOURNAMENT_NAME,
    payload: name
})

export const setTournamentDescribe = (describe) => ({
    type: MAIN_CHANGE_TOURNAMENT_DESCRIBE,
    payload: describe
})