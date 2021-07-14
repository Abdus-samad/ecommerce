import { useContext } from 'react';
import {MinusIcon, PlusIcon} from '@heroicons/react/outline';
import CartContext from '../../context/Cart/cartContext';
import Link from 'next/link';

const ProductOption = ({id, images, price, name, count}) => {


	const cartContext = useContext(CartContext);

	const {addToCart, cart, removeFromCart} = cartContext;

	const cartObject = () => {
		addToCart({id, images, price, name, count});
	};

	const cartProductCount = (id) => {
		const product = cart.find((item) => item.id === id);
		if (!product) return 0;
		return product.count;
	};

	const remove = () => {
		removeFromCart(id);
	};

	return (
	
		<div className='flex flex-col flex-grow rounded-md border border-gray-100 bg-white cursor-pointer hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200'>
			<div className='relative flex items-center justify-center overflow-hidden flex-grow'>
				<Link href='/product/[id]' as={`/product/${id}`}>
					<img src={images[0]} className='max-w-full max-h-full h-auto' />
				</Link>
			</div>
			<div className='box-border px-5 pb-5 '>
				<div className='flex items-center mb-3'>
					<span className='text-gray-800 text-lg font-semibold'>
						${price}
					</span>
				</div>

				<h3 className='mb-8 text-gray-500 text-sm font-normal'>
					{name}
				</h3>
				{((cartProductCount(id) >= 1)) ? (
					<div className='flex bg-green-600 w-full h-9 text-white text-base font-bold justify-between items-center flex-shrink-0 rounded'>
						<button className='border-none bg-tranparent text-white flex items-center h-full p-3 cursor-pointer'>
							<MinusIcon
								className='h-5'
								onClick={() => remove()}
							/>
						</button>
						<span>{cartProductCount(id)}</span>
						<button className='border-none bg-tranparent text-white flex items-center h-full p-3 cursor-pointer outline-none'>
							<PlusIcon
								className='h-5'
								onClick={() => cartObject()}
							/>
						</button>
					</div>
				) : (
					<button
						className='w-full focus:border-none  h-9 rounded cursor-pointer border-0 flex items-center hover:bg-green-700 border-green-700 bg-gray-100 hover:text-white overflow-hidden trasition-all duration-75 ease-in-out'>
						<p className='text-xs flex-grow'>Add</p>
						<span
							onClick={() => cartObject()}
							className='px-2 h-9 bg-gray-200 flex items-center hover:bg-green-600 transition-all hover:text-white duration-75 ease-in-out'>
							<PlusIcon className='h-5' />
						</span>
					</button>
				)}
			</div>
		</div>
	);
};

export default ProductOption;
