import React, { useState } from 'react';
import Filter from '../filter/Filter';
import ImageSlider from '../Banner/ImageSlider';
import Product from './Product';
import BackDrop from '../Common/Drawer/BackDrop';
import Cart from '../Common/Cart/Cart';
import BottomCart from '../Common/Cart/BottomCart';
import Cartdrawer from '../Common/Cart/Cartdrawer';
const Body = () => {
	const [carts, setCart] = useState(false);
	const showCart = () => setCart(!carts);

	let backdrop;

	if (carts) {
		backdrop = <BackDrop showCart={showCart} />;
	}

	return (
		<div className='grocery'>
			<Filter />
			<main>
				<ImageSlider />
				<section>
					<Product />
				</section>
			</main>

			<Cart />
			<BottomCart showCart={showCart} />
			<Cartdrawer carts={carts} showCart={showCart} />
			{backdrop}
		</div>
	);
};

export default Body;
