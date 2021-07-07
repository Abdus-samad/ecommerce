import React, {useReducer} from 'react';
import CartContext from './cartContext';
import reducer from './cartReducer';
import {ADD_TO_CART, FILTER_PRODUCT, REMOVE_FROM_CART} from '../Types';

const CartState = (props) => {
	const initialState = {
		cart: [],
		filter: null,
		loading: false
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
		});
	};

	const filterProduct = (Tag) => {
		dispatch({
			type: FILTER_PRODUCT,
			payload: Tag,
		});
	};

	return (
		<CartContext.Provider
			value={{
				cart: state.cart,
				filter: state.filter,
				addToCart,
				removeFromCart,
			}}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartState;
