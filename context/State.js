import React, {useReducer} from 'react';
import Context from './Context';
import reducer from './reducer';
import {SPAGE, SUPAGE} from './Types';

const State = (props) => {
	const initialState = {
		cart: [],
		user: null,
	};
	const [state, dispatch] = useReducer(reducer, initialState);

	const SwitchToSignUp = () => {
		dispatch({
			type: SPAGE,
		});
	};
	const SwitchToSignIn = () => {
        dispatch({
			type: SUPAGE,
		});
    };
	
	
	return (
		<Context.Provider
			value={{
				SwitchToSignUp,
                SwitchToSignIn
			}}>
			{props.children}
		</Context.Provider>
	);
};

export default State;
