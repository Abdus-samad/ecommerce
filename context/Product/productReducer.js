import {FILTER_PRODUCT, GET_PRODUCT} from '../Types';

const reducer = (state, action) => {
	switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state, 
                product: 
            }


		case FILTER_PRODUCT:
			return {
				...state,
				filter: state.cart.filter((cart) => {
					const regex = new RegExp(`${action.payload}`, 'gi');
					return (
						cart.Tag.match(regex)
					);
				}),
			};
	}
};

export default reducer;
