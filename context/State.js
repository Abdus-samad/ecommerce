import React, {useReducer} from 'react';
import CartContext from './cartContext';
import reducer from './reducer';
import {ADD_TO_CART, REMOVE_FROM_CART} from './Types';

const State = (props) => {
	const initialState = {
		cart: [],
		user: null,
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	const addToCart = (item) => {
		dispatch({
			type: ADD_TO_CART,
			payload: item,
		});
	};
	const removeFromCart = (id) => {
		dispatch({
			type: REMOVE_FROM_CART,
			payload: id,

		})
	}

	return (
		<CartContext.Provider
			value={{
				cart: state.cart,
				addToCart,
				removeFromCart
			}}>
			{props.children}
		</CartContext.Provider>
	);
};

export default State;
