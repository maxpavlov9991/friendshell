import {
	USER_AUTH_SET_MY_INFO
} from './actions'

const initialState = {
	_id: '',
	info: {
		name: '',
		email: '',
		reg_date: '',
		birthday: '',
		sub: {
			subscriptions: [],
			subscribers: []
		},
		questions: {
			my: '',
			tome: '',
		}
	}
}

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_AUTH_SET_MY_INFO:
			return {
				...action.payload // Глубокое копирование
			}
		default:
			return state
	}
}