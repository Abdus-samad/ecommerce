import { XIcon } from '@heroicons/react/outline';
import { ShoppingBagIcon } from '@heroicons/react/solid';
import Empty from '../Icon/Empty';
import { useContext, useState } from 'react';
import Subtotal from '../Subtotal';
import CartProduct from './CartProduct';
import CartContext from '../../../context/Cart/cartContext';
import CurrencyFormat from 'react-currency-format';
import { useRouter } from 'next/router';



const Cart = () => {
	const router = useRouter();
	const [drawer, setDrawer] = useState(false);
	const showDrawer = () => setDrawer(!drawer);

	const cartContext = useContext(CartContext);
	const { cart, loading } = cartContext;

	const getCartTotal = (cart) =>
		cart?.reduce(
			(amount, item) => Number(item.price * item.count) + amount,
			0
		);

	const handleClick = (e) => {
		e.preventDefault();
		router.push('/checkout');
	};
	return (
		<>
			<div
				onClick={showDrawer}
				className='fixed right-0 z-10 flex-col items-center justify-center hidden w-auto h-auto p-0 bg-green-600 border-0 shadow-md cursor-pointer top -mt-11 md:flex rounded-tl-md rounded-bl-md'>
				<Subtotal />
			</div>
			<div className={drawer ? 'side active' : 'side'}>
				<div className='box-content flex flex-col w-full h-full bg-white rounded'>
					<div className='flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 '>
						<div className='inline-flex items-center text-green-700'>
							<ShoppingBagIcon className='w-5 h-7' />
							{!!cart ? (
								<span className='pl-2 text-base font-bold text-green-700'>{` ${cart.length} item`}</span>
							) : (
								''
							)}
						</div>
						<a className='inline-flex items-center justify-center flex-shrink-0 w-4 h-4 p-0 text-gray-300 transition-all duration-75 bg-transparent border-0 outline-none cursor-pointer'>
							<XIcon className='h-5' onClick={showDrawer} />
						</a>
					</div>
					<div className='w-full max-h-full overflow-auto scrollbar'>
						{!loading && cart.length === 0 ? (
							<div className='max-h-full bg-white'>
								<div className='flex items-center justify-center mt-12 mb-5'>
									<Empty />
								</div>
								<span className='text-[14px] flex font-[400] text-[#77798c] relative justify-center mb-5 items-center'>
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
					<div className='flex flex-col w-full mt-auto'>
						<span className='flex justify-center my-5'>
							<button className='inline-flex text-base font-bold text-green-700 transition duration-100 bg-transparent ease'>
								Do you have voucher
							</button>
						</span>
						<button
							onClick={handleClick}
							className='flex items-center justify-between mb-4 ml-4 bg-green-600 shadow h-11 outline'
							style={{ width: '(100% - 30px)' }}>
							<CurrencyFormat
								renderText={(value) => (
									<>
										<a className='flex items-center justify-between w-full pr-2 text-base font-bold text-white pl-7'>
											Checkout
										</a>
										<span className='inline-flex items-center justify-center w-auto h-10 text-base font-bold text-green-600 bg-white px-7 rounded-3xl'>
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
				</div>
			</div>
		</>
	);
};

export default Cart;
