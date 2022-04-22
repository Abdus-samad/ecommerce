import React, { useReducer } from 'react';
import authContext from './authContext';
import reducer from './authReducer';
import { SET_USER } from '../Types';
import { auth } from '../../firebase';

const AuthState = (props) => {
	const initialState = {
		user: null,
	};
	const [state, dispatch] = useReducer(reducer, initialState);

	const getUser = (authUser) => {
		try {
			dispatch({
				type: SET_USER,
				payload: authUser,
			});
		} catch (err) {
			dispatch({
				type: USER_ERROR,
				payload: err,
			});
		}
	};

	return (
		<authContext.Provider
			value={{
				user: state.user,
				getUser,
			}}>
			{props.children}
		</authContext.Provider>
	);
};

export default AuthState;
