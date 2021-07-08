import {FILTER_PRODUCT, GET_PRODUCT} from '../Types';

const reducer = (state, action) => {
	switch (action.type) {
        case GET_PRODUCT:
			console.log('STATE ID', action.payload)
            return {
                ...state, 
                product: state.products.find(product => product.id === action.payload),
				loading: false,
            }


		case FILTER_PRODUCT:
			return {
				...state,
				filtered: state.products.filter((product) => product.category === action.payload),
				loading: false,
			};
	}
};

export default reducer;
