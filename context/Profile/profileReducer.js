import {
	ADD_CONTACT,
	CLEAR_CURRENT,
	CONTACT_ERROR,
	DELETE_CONTACTS,
	EDIT_CONTACTS,
	GET_CONTACTS,
	SET_CURRENT,
} from '../Types';

const profileReducer = (state, action) => {
	switch (action.type) {
		case GET_CONTACTS:
			return {
				...state,
				contacts: action.payload,
			};
		case DELETE_CONTACTS:
			return {
				...state,
				contacts: state.contacts.filter(
					(contact) => contact.id !== action.payload
				),
			};

		case ADD_CONTACT:
			return {
				...state,
				contacts: [...state.contacts, action.payload],
			};
		case EDIT_CONTACTS:
			return {
				...state,
				contacts: state.contacts.map((contact) =>
					contact.id === action.payload.id ? action.payload : contact
				),
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload,
			};
		case CONTACT_ERROR:
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

export default profileReducer;
