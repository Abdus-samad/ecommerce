import {useContext} from 'react';
import Empty from '../Icon/Empty';
import CartContext from '../../context/Cart/cartContext';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

const left = () => {
	const cartContext = useContext(CartContext);

	const {cart, loading} = cartContext;

	const getCartTotal = (cart) =>
		cart?.reduce(
			(amount, item) => Number(item.price * item.count) + amount,
			0
		);
	return (
		<div className='lg:w-[270px] lg:flex-shrink-0 lg:pt-[20px] order-none relative pt-[40px] px-[15px] pb-[30px]'>
			<div className='w-full flex flex-col'>
				<h3 className='text-[15px] font-bold text-[#0d1136] text-center mb-[40px]'>
					Your Order
				</h3>
				<div className='h-full max-h-[390px] pr-[15px]'>
					<div className='flex flex-col pl-[15px]'>
						{!loading && cart.length === 0 ? (
							<div>
								<div className='flex items-center justify-center mb-5'>
									<Empty className='w-[140px] h-auto' />
								</div>
								<h3 className='text-[14px] flex font-[400] text-[#77798c] relative justify-center mb-5 items-center'>
									No Product Found
								</h3>
							</div>
						) : (
							cart.map((item) => (
								<CheckoutProduct
									key={item.id}
									id={item.id}
									name={item.name}
									count={item.count}
									price={item.price}
								/>
							))
						)}
					</div>
				</div>

				<div className='subTotal'>
					<div className='flex w-full justify-between  mb-[10px]'>
						<span className='text-[14px] font-normal text-[#77798c]'>
							Sub Total
						</span>
						<CurrencyFormat
							renderText={(value) => (
								<span className='text-[14px] font-normal text-[#77798c]'>
									{value}
								</span>
							)}
							decimalScale={2}
							value={getCartTotal(cart) || '0.00'}
							displayType={'text'}
							thousandSeparator={true}
							prefix={'$'}
							fixedDecimalScale={true}
						/>
					</div>
					<div className='flex w-full justify-between mb-[10px]'>
						<span className='text-[14px] font-normal text-[#77798c]'>
							Delivery Fee
						</span>
						<span className='text-[14px] font-normal text-[#77798c]'>
							$0.00
						</span>
					</div>
					<div style={{ marginTop: '20px' }} className='flex w-full justify-between  mb-[10px] '>
						<span className='text-[14px] font-bold text-[#0d1136]'>
							Total
						</span>
						<CurrencyFormat
							renderText={(value) => (
								<span className='text-[14px] font-bold text-[#0d1136]'>
									{value}
								</span>
							)}
							decimalScale={2}
							value={getCartTotal(cart) || '0.00'}
							displayType={'text'}
							thousandSeparator={true}
							prefix={'$'}
							fixedDecimalScale={true}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default left;
/* 
    width: 140px;
    height: auto;
}

*/
