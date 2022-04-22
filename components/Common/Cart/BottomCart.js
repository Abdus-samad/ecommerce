import { ShoppingCartIcon } from '@heroicons/react/solid';
import { useContext, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import CartContext from '../../../context/Cart/cartContext';

const BottomCart = (props) => {
	const cartContext = useContext(CartContext);
	const { cart } = cartContext;

	const getCartTotal = (cart) =>
		cart?.reduce(
			(amount, item) => Number(item.price * item.count) + amount,
			0
		);

	return (
		<div>
			<button
				onClick={props.showCart}
				className='fixed flex items-center justify-center w-4/5 py-1 pl-8 pr-1 bg-green-600 border-0 shadow-lg h-11 outline md:hidden left-[10%]'>
				<CurrencyFormat
					renderText={(value) => (
						<>
							<span className='text-white'>
								<span>
									<ShoppingCartIcon className='h-5' />
								</span>
							</span>
							<span className='pl-1 pr-3 text-sm font-bold text-white'>
								{cart.length} items
							</span>

							<span className='inline-flex items-center justify-center w-24 h-10 ml-auto mr-0 overflow-hidden text-xs font-bold text-green-600 bg-white rounded-3xl'>
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
			</button>
		</div>
	);
};

export default BottomCart;
