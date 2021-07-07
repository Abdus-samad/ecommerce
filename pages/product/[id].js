import {MinusIcon, PlusIcon} from '@heroicons/react/outline';
import {ShoppingCartIcon} from '@heroicons/react/solid';
import {useContext, useState} from 'react';
import CartContext from '../../context/Cart/cartContext';
import Cart from '../../components/Cart/Cart';
import Detail from '../../components/Products/Detail';
import Carousel from '../../components/Reuseables/carousel/CarouselC';

import Header from '../../components/Reuseables/Header';
import Related from '../../components/Products/Related';
import Option from '../../components/Products/Option';

const ProductDetail = ({id, image, price, name, count}) => {
	const cartContext = useContext(CartContext);

	const {addToCart, cart, removeFromCart} = cartContext;

	const cartObject = () => {
		addToCart({id, image, price, name, count, Tag});
	};

	console.log(cartObject);
	const cartProductCount = (id) => {
		const product = cart.find((item) => item.id === id);
		if (!product) return 0;
		return product.count;
	};
	const remove = () => {
		removeFromCart(id);
	};
	return (
		<>
			<Header />
			<div className='body relative bg-gray-200'>
				<div className='w-full'>
					<div className='bg-white relative flex flex-wrap items-stretch box-border'>
						<div className='max-w-full imgspace'>
							
								<Carousel />
							
						</div>
						{Detail.map((item, index) => {
							return (
								<div key={index} className='text'>
									<div className='w-full items-start justify-start mb-3'>
										<h1 className='text-3xl font-semibold flex'>
											{item.name}
										</h1>
									</div>
									<div className='flex items-center flex-shrink-0'>
										<h2 className='text-xl font-bold text-gray-800'>
											${item.price}
										</h2>
									</div>
									<p className='font-medium text-base mt-8 text-gray-600'>
										{item.detail}
									</p>
									<div className='flex flex-col mt-16'>
										<div>
											{cartProductCount(id) >= 1 ? (
												<div className='flex bg-green-600 text-white text-base font-bold justify-between items-center overflow-hidden flex-shrink-0 w-28 h-12 rounded'>
													<button className='border-none text-white flex items-center justify-center h-full py-3 px-4'>
														<MinusIcon
															className='h-5'
															onClick={() =>
																remove()
															}
														/>
													</button>
													<span>
														{cartProductCount(id)}
													</span>
													<button className='border-none text-white flex items-center justify-center h-full py-3 px-4'>
														<PlusIcon
															className='h-5'
															onClick={() =>
																cartObject()
															}
														/>
													</button>
												</div>
											) : (
												<button
													onClick={() => cartObject()}
													className='px-8 h-12 text-base 
									font-bold cursor-pointer bg-green-600 
									ounded flex items-center justify-center 
									flex-shrink-0 border-0 
									text-white rounded'>
													<ShoppingCartIcon className='h-6' />
													<span>Add to cart</span>
												</button>
											)}
										</div>
									</div>
									<div className='mt-4 flex justify-start'>
										<h2 className='text-base font-medium text-gray-500 flex-shrink-0'>
											Tags:
										</h2>
										<p className='ml-2 flex flex-wrap'>
											<a>{item.Tag}</a>
										</p>
									</div>
								</div>
							);
						})}
					</div>
					<div className='mt-16 mx-8'>
						<h2 className='font-semibold text-gray-800 text-2xl mb-8'>
							Related Items
						</h2>
						<section>

						<Option />	
						</section>
					</div>
				</div>
			</div>
			<Cart />
		</>
	);
};

export default ProductDetail;


