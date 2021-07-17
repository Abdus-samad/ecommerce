import React, {useReducer} from 'react';
import AuthContext from './authContext';
import reducer from './authReducer';
import { SET_USER, USER_ERROR } from '../Types';

const AuthState = (props) => {
	const initialState = {
		user: null,
		loading: false,
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
		<AuthContext.Provider
         value={{
            user: state.user,
            getUser

        }}>
            {props.children}
        </AuthContext.Provider>
	);
};

export default AuthState;
