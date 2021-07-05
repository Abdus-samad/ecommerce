import CurrencyFormat from 'react-currency-format';
import CartContext from '../context/Cart/cartContext';
import React, {useContext} from 'react';
import {ShoppingCartIcon} from '@heroicons/react/solid';

const Subtotal = () => {
	const cartContext = useContext(CartContext);
	const {cart} = cartContext;

	const getCartTotal = (cart) =>
		cart?.reduce((amount, item) => Number(item.price * item.count) + amount, 0);

	return (
		<div>
			<CurrencyFormat
				renderText={(value) => (
					<>
						<a className='text-sm flex items-center justify-center tp text-white'>
							<span>
								<ShoppingCartIcon className='h-5' />
							</span>
							{cart.length} items
						</a>
						<span className='h-8 w-auto rounded overflow-hidden inline-flex bor items-center justify-center bg-white text-green-600 tm'>
							{value}
						</span>
					</>
				)}
				decimalScale={2}
				value={getCartTotal(cart) || '0.00'}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>
		</div>
	);
};

export default Subtotal;

