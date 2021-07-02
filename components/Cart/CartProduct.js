import {MinusIcon, PlusIcon, XIcon} from '@heroicons/react/outline';
import Image from 'next/image';
import {useContext} from 'react';
import CurrencyFormat from 'react-currency-format';
import CartContext from '../../context/Cart/cartContext';

const CartProduct = ({id, image, price, name, count}) => {
	const cartContext = useContext(CartContext);

	const {addToCart, cart, removeFromCart} = cartContext;

	const cartObject = () => {
		addToCart({id, image, price, name, count});
	};

	const cartProductCount = (id) => {
		const product = cart.find((item) => item.id === id);
		if (!product) return 0;
		return product.count;
	};

	const productTotal = () => Number(price) * count

	const remove = () => {
		removeFromCart(id);
	};
	

	return (
		<div className='text-base font-bold border-b border-gray-100 flex items-center py-8 px-6'>
			<div className='flex text-base radius justify-between items-center overflow-hidden flex-shrink-0 flex-col-reverse bg-gray-200'>
				<a className='border-none bg-transparent flex items-center justify-center h-full cursor-pointer text-gray-500'>
					<MinusIcon className='size' onClick={() => remove()} />
				</a>
				<span>{cartProductCount(id)}</span>
				<a className='border-none bg-transparent flex items-center justify-center h-full p-3 cursor-pointer text-gray-500'>
					<PlusIcon className='size' onClick={() => cartObject()} />
				</a>
			</div>
			<img src={image} alt='' className='w-16 h-16 object-cover mx-4' />
			<div className='flex flex-col ml-4'>
				<span className='leading-3 text-gray-800'>{name}</span>
				<span className='my-3 text-green-700'>${price}</span>
			</div>
			<CurrencyFormat
				renderText={(value) => <span className='ml-auto'>{value}</span>}
				decimalScale={2}
				value={productTotal() || '0.00'}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>
			<button className='p-1 ml-4 cursor-pointer text-gray-200 transition duration-100 bg-transparent'>
				<XIcon className='h-5' onClick={() => remove()} />
			</button>
		</div>
	);
};

export default CartProduct;

/*
padding: 5px;
    border: 0px;
    outline: 0px;
    margin-left: 15px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.25);
    transition: all 0.4s ease 0s;
    background-color: transparent; 

*/
