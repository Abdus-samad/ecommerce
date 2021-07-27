import {useContext} from 'react';
import CurrencyFormat from 'react-currency-format';
import CartContext from '../../context/Cart/cartContext';

const CheckoutProduct = ({id, name, count, price}) => {
	const cartContext = useContext(CartContext);

	const {cart} = cartContext;

	const cartProductCount = (id) => {
		const product = cart.find((item) => item.id === id);
		if (!product) return 0;
		return product.count;
	};

	const productTotal = () => Number(price) * count;

	return (
		<div className='last-child:mb-0 mb-[25px] flex w-full items-start'>
			<span className='text-[14px] font-bold text-[#0d1136]'>
				{cartProductCount(id)}
			</span>
			<span className='text-[14px] text-[#77798c] mx-[12px] font-[400]'>
				x
			</span>
			<span className='text-[14px] text-[#77798c] mx-[3px] font-[400]'>
				{name} | ${price}
			</span>

			<CurrencyFormat
				renderText={(value) => (
					<span className='text-[14px] text-[#77798c] mx-[12px] font-[400]'>
						{value}
					</span>
				)}
				decimalScale={2}
				value={productTotal() || '0.00'}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>
		</div>
	);
};

export default CheckoutProduct;
/* 
 

*/
