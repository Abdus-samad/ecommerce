import {ADD_TO_CART, REMOVE_FROM_CART} from './Types';

const reducer = (state, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			let foundItem = state.cart.find(({id}) => id === action.payload.id);
			if (foundItem) {
				return {
					...state,
					cart: state.cart.map((item) =>
						item.id === action.payload.id
							? {...item, count: String(Number(item.count) + 1)}
							: item
					),
				};
			}

			return {
				...state,
				cart: [...state.cart, action.payload],
			};

		case REMOVE_FROM_CART:
			let secondItem = state.cart.find(({id}) => id === action.payload);

			if (secondItem && Number(secondItem.count) > 1) {
				return {
					...state,
					cart: state.cart.map((item) =>
						item.id === action.payload
							? {...item, count: String(Number(item.count) - 1)}
							: item
					),
				};
			}

			const index = state.cart.findIndex(
				(cartItem) => cartItem.id === action.payload
			);
			let newCart = [...state.cart];
			if (index >= 0) {
				newCart.splice(index, 1);
			}

			return {
				...state,
				cart: newCart.length ? newCart : [],
			};
	}
};

export default reducer;
