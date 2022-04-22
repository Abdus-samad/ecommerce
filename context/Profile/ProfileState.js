import { useReducer } from 'react';
import profileReducer from './profileReducer';
import ProfileContext from './profileContext';
import axios from 'axios';
import {
	ADD_CONTACT,
	CLEAR_CURRENT,
	CONTACT_ERROR,
	DELETE_CONTACTS,
	EDIT_CONTACTS,
	GET_CONTACTS,
	SET_CURRENT,
} from '../Types';

const ProfileState = (props) => {
	const initialState = {
		contacts: null,
		current: null,
		error: null,
	};

	const [state, dispatch] = useReducer(profileReducer, initialState);
	// Contacts

	const getContacts = async () => {
		try {
			const res = await axios.get('http://localhost:5000/profile');
			dispatch({
				type: GET_CONTACTS,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: CONTACT_ERROR,
				payload: err.res.msg,
			});
		}
	};

	const deleteContact = async (id) => {
		try {
			await axios.delete(`http://localhost:5000/profile/${id}`);

			dispatch({
				type: DELETE_CONTACTS,
				payload: id,
			});
		} catch (err) {
			dispatch({
				type: CONTACT_ERROR,
				payload: err.response.msg,
			});
		}
	};

	const addContact = async (contact) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post(
				'http://localhost:5000/profile',
				contact,
				config
			);

			dispatch({
				type: ADD_CONTACT,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: CONTACT_ERROR,
				payload: err.response.msg,
			});
		}
	};
	const updateContact = async (contact) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const res = await axios.put(
				`http://localhost:5000/profile/${contact.id}`,
				contact,
				config
			);

			dispatch({
				type: EDIT_CONTACTS,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: CONTACT_ERROR,
				payload: err.response.msg,
			});
		}
	};

	const setCurrent = (contact) => {
		dispatch({ type: SET_CURRENT, payload: contact });
	};

	// Clear Current Contact
	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT });
	};

	return (
		<ProfileContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				error: state.error,
				getContacts,
				deleteContact,
				addContact,
				updateContact,
				setCurrent,
				clearCurrent,
			}}>
			{props.children}
		</ProfileContext.Provider>
	);
};

export default ProfileState;
