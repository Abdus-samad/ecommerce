import Head from 'next/head';
import React, { useEffect } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/outline';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import { useContext, useState } from 'react';
import CartContext from '../../context/Cart/cartContext';
import ProductContext from '../../context/Product/productContext';
import Carousel from '../../components/carousel/Carousel';
import Header from '../../components/Common/Header';
import Option from '../../components/Products/Option';
import { useRouter } from 'next/router';
import Spinner from '../../components/Common/Spinner';
import Drawer from '../../components/Common/Drawer/Drawer';
import BackDrop from '../../components/Common/Drawer/BackDrop';
import Cart from '../../components/Common/Cart/Cart';
import BottomCart from '../../components/Common/Cart/BottomCart';
import Cartdrawer from '../../components/Common/Cart/Cartdrawer';

const ProductDetail = () => {
	//  Drawer
	const [drawer, setDrawer] = useState(false);
	const showDrawer = () => setDrawer(!drawer);

	const [carts, setCart] = useState(false);
	const showCart = () => setCart(!carts);

	let backdrop;

	if (drawer) {
		backdrop = <BackDrop showDrawer={showDrawer} />;
	}

	if (carts) {
		backdrop = <BackDrop showCart={showCart} />;
	}
	//  Productz
	const router = useRouter();
	const { id } = router.query;

	const productContext = useContext(ProductContext);
	const { getProduct, products, loading } = productContext;

	useEffect(() => {
		getProduct(id);
	}, [id]);

	const product = products.find((product) => product.id === id);

	// Cart
	const cartContext = useContext(CartContext);
	const { addToCart, cart, removeFromCart } = cartContext;

	const cartObject = () => {
		addToCart(product);
	};

	const cartProductCount = (id) => {
		const product = cart.find((item) => item.id === id);
		if (!product) return 0;
		return product.count;
	};
	const remove = () => {
		removeFromCart(id);
	};

	if (loading)
		return (
			<div>
				<Spinner />
			</div>
		);

	return (
		<>
			<Head>
				<title>My Store</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header showDrawer={showDrawer} />
			<Drawer drawer={drawer} showDrawer={showDrawer} />
			{backdrop}
			<div className='relative bg-gray-200 body'>
				<div className='w-full'>
					<div className='box-border relative flex flex-wrap items-stretch bg-white'>
						<div className='rex imgspace'>
							{product && <Carousel images={product.images} />}
						</div>
						<div className='break-words text gc'>
							<div className='items-start justify-start w-full mb-3'>
								<h1 className='flex text-3xl font-semibold'>
									{product ? product.name : ''}
								</h1>
							</div>
							<div className='flex items-center flex-shrink-0'>
								<h2 className='text-xl font-bold text-gray-800'>
									${product ? product.price : ''}
								</h2>
							</div>
							<p className='mt-8 text-base font-medium text-gray-600'>
								{product ? product.detail : ''}
							</p>
							<div className='flex flex-col mt-16'>
								<div>
									{cartProductCount(id) >= 1 ? (
										<div className='flex items-center justify-between flex-shrink-0 h-12 overflow-hidden text-base font-bold text-white bg-secondary-main rounded w-[138px]'>
											<button className='flex items-center justify-center h-full px-4 py-3 text-white border-none'>
												<MinusIcon
													className='h-5'
													onClick={() => remove()}
												/>
											</button>
											<span>{cartProductCount(id)}</span>
											<button className='flex items-center justify-center h-full px-4 py-3 text-white border-none'>
												<PlusIcon
													className='h-5'
													onClick={() => cartObject()}
												/>
											</button>
										</div>
									) : (
										<button
											onClick={() => cartObject()}
											className='flex items-center justify-center flex-shrink-0 h-12 px-8 text-base font-bold text-white border-0 rounded cursor-pointer bg-secondary-main ounded'>
											<ShoppingCartIcon className='h-6' />
											<span>Add to cart</span>
										</button>
									)}
								</div>
							</div>
							<div className='flex justify-start mt-4'>
								<h2 className='flex-shrink-0 text-base font-medium text-gray-500'>
									Category:
								</h2>
								<p className='flex flex-wrap ml-2'>
									<a>{product ? product.category : ''}</a>
								</p>
							</div>
						</div>
					</div>
					<div className='mx-8 mt-16'>
						<h2 className='mb-8 text-2xl font-semibold text-gray-800'>
							Related Items
						</h2>
						<section>
							<Option />
						</section>
					</div>
				</div>
			</div>
			<Cart />
			<BottomCart showCart={showCart} />
			<Cartdrawer carts={carts} showCart={showCart} />
			{backdrop}
		</>
	);
};

export default ProductDetail;
