import {
	ADDRESS_ERROR,
	ADD_ADDRESS,
	CLEAR_CURRENT,
	DELETE_ADDRESS,
	EDIT_ADDRESS,
	GET_ADDRESS,
	SET_CURRENT,
} from '../Types';

const addressReducer = (state, action) => {
	switch (action.type) {
		case GET_ADDRESS:
			return {
				...state,
				address: action.payload,
			};
		case DELETE_ADDRESS:
			return {
				...state,
				address: state.address.filter(
					(add) => add.id !== action.payload
				),
			};

		case ADD_ADDRESS:
			return {
				...state,
				address: [...state.address, action.payload],
			};
		case EDIT_ADDRESS:
			return {
				...state,
				address: state.address.map((add) =>
					add.id === action.payload.id ? action.payload : add
				),
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload,
			};
		case ADDRESS_ERROR:
			return {
				...state,
				error: action.payload,
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null,
			};
		default:
			return state;
	}
};

export default addressReducer;
