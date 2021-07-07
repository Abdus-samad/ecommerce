import React from 'react';
import Side from '../Side/Side';
import ImageSlider from '../Banner/ImageSlider';
import Cart from '../Cart/Cart';
import Product from './Product';
import BottomCart from '../Cart/BottomCart';

const Body = () => {
	return (
		<div className='grocery'>
			<Side />
			<main>
				<ImageSlider />
				<section>
					<Product />
				</section>
			</main>
			<Cart />
			<BottomCart />
		</div>
	);
};

export default Body;
