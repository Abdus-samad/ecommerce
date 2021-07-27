import React, {useState} from 'react';
import Side from '../Side/Side';
import ImageSlider from '../Banner/ImageSlider';
import Cart from '../Cart/Cart';
import Product from './Product';
import BottomCart from '../Cart/BottomCart';
import Cartdrawer from '../Cart/Cartdrawer';
import BackDrop from '../Drawer/BackDrop';

const Body = () => {
	const [carts, setCart] = useState(false);
	const showCart = () => setCart(!carts);

	let backdrop;

	if (carts) {
		backdrop = <BackDrop showCart={showCart} />;
	}

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
			<BottomCart showCart={showCart} />
			<Cartdrawer carts={carts} showCart={showCart} />
			{backdrop}
		</div>
	);
};

export default Body;
