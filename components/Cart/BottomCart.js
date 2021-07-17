import {XIcon} from '@heroicons/react/outline';
import {ShoppingBagIcon, ShoppingCartIcon} from '@heroicons/react/solid';
import {useContext, useState} from 'react';
import CurrencyFormat from 'react-currency-format';
import CartContext from '../../context/Cart/cartContext';
import Empty from '../Icon/Empty';

const BottomCart = (props) => {


	const cartContext = useContext(CartContext);
	const {cart} = cartContext;

	const getCartTotal = (cart) =>
		cart?.reduce(
			(amount, item) => Number(item.price * item.count) + amount,
			0
		);

	return (
		<div className=''>
			<button
				onClick={props.showDrawer}
				className='w-4/5 h-11 py-1 pr-1 pl-8 flex items-center bg-green-600 border-0 outline shadow-lg fixed  md:hidden'>
				<CurrencyFormat
					renderText={(value) => (
						<>
							<span className='text-white'>
								<span>
									<ShoppingCartIcon className='h-5' />
								</span>
							</span>
							<span className='text-sm font-bold pl-1 pr-3 text-white'>
								{cart.length} items
							</span>

							<span className='h-10  w-24 ml-auto mr-0 rounded-3xl overflow-hidden inline-flex  items-center justify-center bg-white text-green-600 font-bold text-xs'>
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
			</button>
		</div>
	);
};

export default BottomCart;
