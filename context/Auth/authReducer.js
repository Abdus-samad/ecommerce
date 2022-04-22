import {
	REGISTER_FAIL,
	REGISTER_SUCCESS,
	SET_USER,
	USER_ERROR,
} from '../Types';

const reducer = (state, action) => {
	switch (action.type) {
		case SET_USER:
			// console.log(payload)
			return {
				...state,
				user: action.payload,
			};

		case USER_ERROR:
			return {
				...state,
				user: null,
			};

		default:
			return state;
	}
};

export default reducer;
