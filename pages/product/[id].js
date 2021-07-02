import {MinusIcon, PlusIcon} from '@heroicons/react/outline';
import {ShoppingCartIcon} from '@heroicons/react/solid';
import {useContext, useState} from 'react';
import Cart from '../../components/Cart/Cart';
import Carousel from '../../components/Reuseables/carousel/CarouselContent';
import Dot from '../../components/Reuseables/carousel/Dot';
import Header from '../../components/Reuseables/Header';
import CartContext from '../../context/Cart/cartContext';

const ProductDetail = ({id, image, price, name, count, Tag}) => {
	const [change, setChange] = useState(false);

	const handleClick = () => setChange(true);

	const cartContext = useContext(CartContext);

	const {addToCart, cart, removeFromCart} = cartContext;

	const cartObject = () => {
		addToCart({id, image, price, name, count, Tag});
	};

	console.log(cartObject)
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
			<div className='body relative bg-white'>
				<div className='w-full'>
					<div className='bg-white relative flex flex-wrap items-stretch box-border'>
						<div className='max-w-full imgspace'>
							<div className='flex relative items-center overflow-hidden width '>
								<Carousel />
							</div>
						</div>
						<div className='text'>
							<div className='w-full items-start justify-start mb-3'>
								<h1 className='text-3xl font-semibold flex'>
									lime
								</h1>
							</div>
							<div className='flex items-center flex-shrink-0'>
								<h2 className='text-xl font-bold text-gray-800'>
									$15
								</h2>
							</div>
							<p className='font-medium text-base mt-8 text-gray-600'>
								The lemon/lime, Citrus limon Osbeck, is a
								species of small evergreen tree in the flowering
								plant family Rutaceae, native to South Asia,
								primarily North eastern India.
							</p>
							<div className='flex flex-col mt-16'>
								<div onClick={!change ? handleClick : null}>
									{change ? (
										<div className='flex bg-green-600 text-white text-base font-bold justify-between items-center overflow-hidden flex-shrink-0 w-28 h-12 rounded'>
											<button className='border-none text-white flex items-center justify-center h-full py-3 px-4' onClick={change ? handleClick : null}>
												<MinusIcon className='h-5' onClick={() => remove()} />
											</button>
											<span>{cartProductCount(id)}</span>
											<button className='border-none text-white flex items-center justify-center h-full py-3 px-4'>
												<PlusIcon className='h-5' onClick={() => cartObject()}/>
											</button>
										</div>
									) : (
										<button
											className='px-8 h-12 text-base 
									font-bold cursor-pointer bg-green-600 
									ounded flex items-center justify-center 
									flex-shrink-0 border-0 
									text-white rounded'>
											<ShoppingCartIcon className='h-6'onClick={() => cartObject()} />
											<span>Add to cart</span>
										</button>
									)}
								</div>
							</div>
							<div className='mt-4 flex justify-start'>
							<h2 className='text-base font-medium text-gray-500 flex-shrink-0'>Tags:</h2>
							<p className='ml-2 flex flex-wrap'></p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Cart />
		</>
	);
};

export default ProductDetail;

// margin-left: 10px;
// display: flex;
// flex-wrap: wrap;




















// function simulateNetworkRequest() {
// 	return new Promise((resolve) => setTimeout(resolve, 2000));
//   }

//   function LoadingButton() {
// 	const [isLoading, setLoading] = useState(false);

// 	useEffect(() => {
// 	  if (isLoading) {
// 		simulateNetworkRequest().then(() => {
// 		  setLoading(false);
// 		});
// 	  }
// 	}, [isLoading]);

// 	const handleClick = () => setLoading(true);

// 	return (
// 	  <Button
// 		variant="primary"
// 		disabled={isLoading}
// 		onClick={!isLoading ? handleClick : null}
// 	  >
// 		{isLoading ? 'Loading…' : 'Click to load'}
// 	  </Button>
// 	);
//   }
