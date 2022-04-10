import {ShoppingBagIcon, XIcon} from '@heroicons/react/outline';
import {useRouter} from 'next/router';
import {useContext} from 'react';
import CurrencyFormat from 'react-currency-format';
import CartContext from '../../../context/Cart/cartContext';
import Empty from '../Icon/Empty';
import CartProduct from './CartProduct';

const Cartdrawer = (props) => {
const router = useRouter();

	const handleClick = (e) => {
		e.preventDefault();
		router.push('/checkout');
	};

	const cartContext = useContext(CartContext);
	const {cart, loading} = cartContext;

	const getCartTotal = (cart) =>
		cart?.reduce(
			(amount, item) => Number(item.price * item.count) + amount,
			0
		);

	return (
		<div className={props.carts ? 'bottom active' : 'bottom'}>
			<div className='box-content flex flex-col w-full h-full overflow-hidden bg-white rounded'>
				<div className='flex items-center justify-center px-6 py-4 bg-white border-b border-gray-100 '>
					<div className='inline-flex items-center text-green-700'>
						<ShoppingBagIcon className='w-5 h-7' />
						{!!cart ? (
							<span className='pl-2 text-base font-bold text-green-700'>{` ${cart.length} item`}</span>
						) : (
							''
						)}
					</div>
					<a className='absolute inline-flex items-center justify-center text-gray-800 bg-white rounded-full -top-11 w-9 h-9 backdrop-blur-2xl '>
						<XIcon className='h-5' onClick={props.showCart} />
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
						className='flex items-center justify-between w-5/6 mb-4 ml-4 bg-green-600 shadow h-11 outline'>
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
	);
};

export default Cartdrawer;
