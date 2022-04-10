import CurrencyFormat from 'react-currency-format';
import CartContext from '../../context/Cart/cartContext';
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
						<a className='flex items-center justify-center text-sm text-white tp w'>
							<span>
								<ShoppingCartIcon className='h-5' />
							</span>
							{cart.length} items
						</a>
						<span className='inline-flex items-center justify-center w-auto h-8 overflow-hidden text-green-600 bg-white rounded bor tm'>
							{value}
						</span>
					</>
				)}
				decimalScale={2}
				value={getCartTotal(cart) || '0.00'}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
				fixedDecimalScale={true}
			/>
		</div>
	);
};

export default Subtotal;

