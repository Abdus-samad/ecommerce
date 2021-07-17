import {XIcon} from '@heroicons/react/outline';
import {ShoppingBagIcon, ShoppingCartIcon} from '@heroicons/react/solid';
import Empty from '../Icon/Empty';
import {useContext, useState} from 'react';
import Subtotal from '../Subtotal';
import CartProduct from './CartProduct';
import CartContext from '../../context/Cart/cartContext';
import CurrencyFormat from 'react-currency-format';

const Cart = () => {
	const [drawer, setDrawer] = useState(false);
	const showDrawer = () => setDrawer(!drawer);

	const cartContext = useContext(CartContext);

	const {cart, loading} = cartContext;

	const getCartTotal = (cart) =>
		cart?.reduce(
			(amount, item) => Number(item.price * item.count) + amount,
			0
		);

	return (
		<>
			<div
				onClick={showDrawer}
				className='hidden  h-auto w-auto right-0 z-10 top -mt-11 md:flex flex-col items-center justify-center bg-green-600 p-0 shadow-md rounded-tl-md rounded-bl-md border-0 cursor-pointer fixed'>
				<Subtotal />
			</div>
			<div className={drawer ? 'side active' : 'side'}>
				<div className='w-full h-full flex flex-col rounded bg-white box-content'>
					<div className=' px-6 py-4 bg-white flex items-center justify-between border-b border-gray-100'>
						<div className='inline-flex items-center text-green-700'>
							<ShoppingBagIcon className='h-7 w-5' />
							{!!cart ? (
								<span className='text-base font-bold text-green-700 pl-2'>{` ${cart.length} item`}</span>
							) : (
								''
							)}
						</div>
						<a className='w-4 h-4 inline-flex items-center justify-center p-0 border-0 outline-none flex-shrink-0 cursor-pointer text-gray-300 transition-all duration-75 bg-transparent'>
							<XIcon className='h-5' onClick={showDrawer} />
						</a>
					</div>
					<div className='max-h-full w-full overflow-auto scrollbar'>
						{!loading && cart.length === 0 ? (
							<div className='max-h-full bg-white'>
								<div className='flex items-center justify-center mb-5 mt-12'>
									<Empty />
								</div>
								<span className='text-base pl-36 font-bold text-gray-700 w-full py-10 text-center'>
									No Product Found
								</span>
							</div>
						) : (
							cart.map((item) => (
								<CartProduct
									key={item.id}
									id={item.id}
									name={item.name}
									images={item.images}
									price={item.price}
									rating={item.rating}
									count={item.count}
								/>
							))
						)}
					</div>
					<div className='w-full flex flex-col mt-auto'>
						<span className='my-5 flex justify-center'>
							<button className='inline-flex bg-transparent text-base font-bold text-green-700 transition duration-100 ease'>
								Do you have voucher
							</button>
						</span>
						<button
							className='h-11 flex items-center justify-between bg-green-600 shadow outline mb-4 ml-4'
							style={{width: '(100% - 30px)'}}>
							<CurrencyFormat
								renderText={(value) => (
									<>
										<a className='w-full flex items-center justify-between pl-7 text-base font-bold text-white pr-2'>
											Checkout
										</a>
										<span className='h-10 w-auto px-7 rounded-3xl inline-flex text-base font-bold text-green-600 items-center justify-center bg-white'>
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
				</div>
			</div>
		</>
	);
};

export default Cart; 