import {XIcon} from '@heroicons/react/outline';
import {ShoppingBagIcon, ShoppingCartIcon} from '@heroicons/react/solid';

import {useContext, useState} from 'react';
import Subtotal from '../Subtotal';
import CartProduct from './CartProduct';
import CartContext from '../../context/Cart/cartContext';

const Cart = () => {
	const [drawer, setDrawer] = useState(false);
	const showDrawer = () => setDrawer(!drawer);

	const cartContext = useContext(CartContext);

	const { cart } = cartContext;

	return (
		<>
		   
			<div
				onClick={showDrawer}
				className='hidden  h-auto w-auto right-0 z-90 top -mt-11 md:flex flex-col items-center justify-center bg-green-600 p-0 shadow-md rounded-tl-md rounded-bl-md border-0 cursor-pointer fixed'>
				<Subtotal />
			</div>
			<div className={drawer ? 'side active' : 'side'}>
				<div className='w-full h-full flex flex-col rounded bg-white box-content max-h-full overflow-y-scroll '>
					<div className=' px-6 py-4 bg-white flex items-center justify-between border-b border-gray-100'>
						<div className='inline-flex items-center text-green-700'>
							<ShoppingBagIcon className='h-7 w-5' />
							{!!cart ? (
								<span className='text-base font-bold text-green-700 pl-2'>{` ${cart.length} item`}</span>
							) : (
								''
							)}
						</div>
						<a className='w-4 h-4 inline-flex items-center justify-center p-0 border-0 outline-none flex-shrink-0 cursor-pointer text-gray-300 transition-all duration-75 bg-transparent'>
							<XIcon className='h-5' onClick={showDrawer} />
						</a>
					</div>
					<div className='max-h-full w-full h-auto'>
						<div></div>
						{cart.map((item) => (
							<CartProduct
								key={item.id}
								id={item.id}
								name={item.name}
								image={item.image}
								price={item.price}
								rating={item.rating}
								count={item.count}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;

