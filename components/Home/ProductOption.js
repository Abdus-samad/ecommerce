import {useContext, useState} from 'react';
import {MinusIcon, PlusIcon} from '@heroicons/react/outline';
import Image from 'next/image';
import CartContext from '../../context/cartContext';

const ProductOption = ({id, image, price, name, count}) => {
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

	const remove = () => {
		removeFromCart(id);
	};

	const [color, setColor] = useState('bg-gray-100');
	const [colorText, setTextColor] = useState('text-gray-800');


	/**
	margin-bottom: 10px;
    color: rgb(153, 153, 153);
    font-size: 14px;
    font-weight: normal;
}
}
	 */

	return (
		<div className='flex flex-col flex-grow card p-8 cursor-pointer border border-gray-100 bg-white rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200'>
			<div className='relative flex items-center justify-center overflow-hidden flex-grow'>
				<img src={image} className='max-w-full max-h-full h-auto' />
			</div>
			<div className='box-border min-w-0 m-0 px-5 pb-5'>
				<div className='flex items-center mb-3'>
					<span className='text-gray-800 text-lg font-semibold'>
						${price}
					</span>
				</div>
				<h2 className='mb-8 text-gray-500 text-sm font-normal'>{name}</h2>
			
 {/* *     display: flex;
    background-color: rgb(0, 158, 127);
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: 700;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    overflow: hidden;
    flex-shrink: 0;
    width: 100%;
    height: 36px;
    border-radius: 6px; */}


				<div
					className={`flex ${color} hover:bg-green-500 hover:text-white cursor-pointer h-9 w-full rounded text-black text-base justify-between items-center overflow-hidden flex-shirnk`}>
					<a
						onClick={() => {
							setColor('bg-gray-100');
							setTextColor('text-gray-800');
						}}
						className={
							`border-none ${colorText} flex items-center jusify-center h-full p-2 transition-all duration-100 ease-in-out`
						}>
						<MinusIcon className=' h-5' onClick={() => remove()} />
					</a>
					<span>
						{cartProductCount(id) ? cartProductCount(id) : 'Add'}
					</span>
					<a
						onClick={() => {
							setColor('bg-green-500');
							setTextColor('text-white')
						}}
						className={
							`border-none ${colorText} flex items-center jusify-center h-full p-2 transition-all duration-100 ease-in-out`
						}>
						<PlusIcon
							className='h-5'
							onClick={() => cartObject()}
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProductOption;
