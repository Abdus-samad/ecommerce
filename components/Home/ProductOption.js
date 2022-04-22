import { useContext } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/outline';
import CartContext from '../../context/Cart/cartContext';
import Link from 'next/link';
import Image from 'next/image';

const ProductOption = ({ id, images, price, name, count }) => {
	const cartContext = useContext(CartContext);

	const { addToCart, cart, removeFromCart } = cartContext;

	const cartObject = () => {
		addToCart({ id, images, price, name, count });
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
		<div className='flex flex-col flex-grow py-6 transition-all duration-200 transform bg-white border border-gray-100 rounded-md cursor-pointer hover:shadow-md hover:border-opacity-0 hover:-translate-y-1'>
			<div className='relative flex items-center justify-center flex-grow overflow-hidden'>
				<Link href='/product/[id]' as={`/product/${id}`}>
					<a>
						<Image width={230} height={240} src={images[0]} />
					</a>
				</Link>
			</div>
			<div className='box-border px-5 pb-5 '>
				<div className='flex items-center mb-3'>
					<span className='text-lg font-semibold text-gray-800'>
						${price}
					</span>
				</div>

				<h3 className='mb-8 text-sm font-normal text-gray-500'>
					{name}
				</h3>
				{cartProductCount(id) >= 1 ? (
					<div className='flex items-center justify-between flex-shrink-0 w-full text-base font-bold text-white rounded bg-secondary-main h-9'>
						<button className='flex items-center h-full p-3 text-white border-none cursor-pointer bg-tranparent'>
							<MinusIcon
								className='h-5'
								onClick={() => remove()}
							/>
						</button>
						<span>{cartProductCount(id)}</span>
						<button className='flex items-center h-full p-3 text-white border-none outline-none cursor-pointer bg-tranparent'>
							<PlusIcon
								className='h-5'
								onClick={() => cartObject()}
							/>
						</button>
					</div>
				) : (
					<button className='flex items-center w-full overflow-hidden duration-75 ease-in-out bg-gray-100 border-0 border-green-700 rounded cursor-pointer group focus:border-none h-9 hover:bg-secondary-100 hover:text-white trasition-all'>
						<p className='flex-grow text-xs'>Add</p>
						<span
							onClick={() => cartObject()}
							className='flex items-center px-2 transition-all duration-75 ease-in-out bg-gray-200 h-9 hover:text-white group-hover:bg-secondary-main'>
							<PlusIcon className='h-5' />
						</span>
					</button>
				)}
			</div>
		</div>
	);
};

export default ProductOption;
