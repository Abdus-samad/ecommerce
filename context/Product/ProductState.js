import React, {useReducer} from 'react';
import { FILTER_PRODUCT } from '../Types';
import ProductContext from './productContext';
import reducer from './productReducer';


const CartState = (props) => {
	const initialState = {
		product: null,
		filter: null,
		loading: false
	};

	const [state, dispatch] = useReducer(reducer, initialState);

    const getProduct = (product) => {
        dispatch({
            type: GET_PRODUCT,
            payload: product
        })
    }

	const filterProduct = (Tag) => {
		dispatch({
			type: FILTER_PRODUCT,
			payload: Tag,
		});
	};

	return (
		<ProductContext.Provider
			value={{
				product: state.product,
				filter: state.filter,
                loading: state.loading,
				filterProduct,
                getProduct
			}}>
			{props.children}
		</ProductContext.Provider>
	);
};

export default CartState;
