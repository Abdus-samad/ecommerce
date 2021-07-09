import React, { useState } from 'react';
import Side from '../Side/Side';
import ImageSlider from '../Banner/ImageSlider';
import Cart from '../Cart/Cart';
import Product from './Product';
import BottomCart from '../Cart/BottomCart';
import Cartdrawer from '../Cart/Cartdrawer';
import BackDrop from '../Drawer/BackDrop';

const Body = () => {
	const [drawer, setDrawer] = useState(false);

	const showDrawer = () => setDrawer(!drawer);

	let backdrop;

	if (drawer) {
		backdrop = <BackDrop showDrawer={showDrawer} />;
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
			<BottomCart showDrawer={showDrawer} />
			<Cartdrawer drawer={drawer} showDrawer={showDrawer}/>
			{backdrop}
		</div>
	);
};

export default Body;
