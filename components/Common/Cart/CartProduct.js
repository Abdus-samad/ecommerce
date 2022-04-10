import { MinusIcon, PlusIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { useContext } from 'react';
import CurrencyFormat from 'react-currency-format';
import CartContext from '../../../context/Cart/cartContext';

const CartProduct = ({ id, images, price, name, count }) => {
	const cartContext = useContext(CartContext);

	const { addToCart, cart, removeFromCart, clearItem } = cartContext;

	const cartObject = () => {
		addToCart({ id, images, price, name, count });
	};

	const cartProductCount = (id) => {
		const product = cart.find((item) => item.id === id);
		if (!product) return 0;
		return product.count;
	};

	const productTotal = () => Number(price) * count;

	const remove = () => {
		removeFromCart(id);
	};

	const clear = () => {
		clearItem();
	};

	return (
		<div className='flex items-center px-6 py-8 text-base font-bold border-b border-gray-100'>
			<div className='flex flex-col-reverse items-center justify-between flex-shrink-0 overflow-hidden text-base bg-gray-200 radius'>
				<a className='flex items-center justify-center h-full text-gray-500 bg-transparent border-none cursor-pointer'>
					<MinusIcon className='size' onClick={() => remove()} />
				</a>
				<span>{cartProductCount(id)}</span>
				<a className='flex items-center justify-center h-full p-3 text-gray-500 bg-transparent border-none cursor-pointer'>
					<PlusIcon className='size' onClick={() => cartObject()} />
				</a>
			</div>
			<img
				src={images[0]}
				alt=''
				className='object-cover w-16 h-16 mx-4'
			/>
			<div className='flex flex-col ml-4'>
				<span className='text-gray-800 l'>{name}</span>
				<span className='my-3 text-green-700'>${price}</span>
			</div>
			<CurrencyFormat
				renderText={(value) => <span className='ml-auto'>{value}</span>}
				decimalScale={2}
				value={productTotal() || '0.00'}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
				fixedDecimalScale={true}
			/>
			<button className='p-1 ml-4 text-gray-200 transition duration-100 bg-transparent cursor-pointer'>
				<XIcon className='h-5' onClick={() => clear()} />
			</button>
		</div>
	);
};

export default CartProduct;
