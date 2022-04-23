import { useReducer } from 'react';
import addressReducer from './addressReducer';
import addressContext from './addressContext';
import axios from 'axios';

import {
	ADDRESS_ERROR,
	ADD_ADDRESS,
	CLEAR_CURRENT,
	DELETE_ADDRESS,
	EDIT_ADDRESS,
	GET_ADDRESS,
	SET_CURRENT,
} from '../Types';

const AddressState = (props) => {
	const initialState = {
		address: null,
		current: null,
		error: null,
	};

	const [state, dispatch] = useReducer(addressReducer, initialState);

	const getAddress = async () => {
		try {
			const res = await axios.get('http://localhost:5000/address');
			dispatch({
				type: GET_ADDRESS,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: ADDRESS_ERROR,
				payload: err.res.msg,
			});
		}
	};

	const deleteAddress = async (id) => {
		try {
			await axios.delete(`http://localhost:5000/address/${id}`);

			dispatch({
				type: DELETE_ADDRESS,
				payload: id,
			});
		} catch (err) {
			dispatch({
				type: ADDRESS_ERROR,
				payload: err.res.msg,
			});
		}
	};

	const addAddress = async (address) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post(
				'http://localhost:5000/address',
				address,
				config
			);

			dispatch({
				type: ADD_ADDRESS,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: ADDRESS_ERROR,
				payload: err.res.msg,
			});
		}
	};
	const updateAddress = async (address) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const res = await axios.put(
				`http://localhost:5000/address/${address.id}`,
				address,
				config
			);

			dispatch({
				type: EDIT_ADDRESS,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: ADDRESS_ERROR,
				payload: err.response.msg,
			});
		}
	};

	const setCurrent = (address) => {
		dispatch({ type: SET_CURRENT, payload: address });
	};

	// Clear Current Contact
	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT });
	};

	return (
		<addressContext.Provider
			value={{
				address: state.address,
				current: state.current,
				error: state.error,
				getAddress,
				deleteAddress,
				addAddress,
				updateAddress,
				setCurrent,
				clearCurrent,
			}}>
			{props.children}
		</addressContext.Provider>
	);
};

export default AddressState;
