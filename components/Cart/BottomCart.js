import {  XIcon } from '@heroicons/react/outline';
import {ShoppingBagIcon,ShoppingCartIcon} from '@heroicons/react/solid';
import { useContext, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import CartContext from '../../context/Cart/cartContext';
import CartProduct from './CartProduct';

const BottomCart = () => {
    const [drawer, setDrawer] = useState(false);
	const showDrawer = () => setDrawer(!drawer);

	const cartContext = useContext(CartContext);
	const {cart} = cartContext;

	const getCartTotal = (cart) =>
		cart?.reduce((amount, item) => Number(item.price * item.count) + amount, 0);

	return (
        <div className=''>
        
		<button 
        	onClick={showDrawer}
        className='w-4/5 h-11 py-1 pr-1 pl-8 flex items-center bg-green-600 border-0 outline shadow-lg fixed z-30 md:hidden'>
			<CurrencyFormat
				renderText={(value) => (
					<>
						<span className='text-white'>
							<span>
								<ShoppingCartIcon className='h-5' />
							</span>
						</span>
						<span className='text-sm font-bold pl-1 pr-3 text-white'>
							{cart.length} items
						</span>

						<span className='h-10  w-24 ml-auto mr-0 rounded-3xl overflow-hidden inline-flex  items-center justify-center bg-white text-green-600 font-bold text-xs'>
							{value}
						</span>
					</>
				)}
				decimalScale={2}
				value={getCartTotal(cart) || '0.00'}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>
		</button>
        <div className="backdrop-blur-2xl w-full h-full">
        	<div className={drawer ? 'bottom active' : 'bottom'}>
				<div className='w-full h-full flex flex-col rounded bg-white box-content max-h-full overflow-y-scroll '>
					<div className=' px-6 py-4 bg-white flex items-center justify-center border-b border-gray-100'>
						<div className='inline-flex items-center text-green-700'>
							<ShoppingBagIcon className='h-7 w-5' />
							{!!cart ? (
								<span className='text-base font-bold text-green-700 pl-2'>{` ${cart.length} item`}</span>
							) : (
								''
							)}
						</div>
						<a className='absolute inline-flex items-center justify-center -top-11 bg-white w-9 h-9 rounded-full text-gray-800 backdrop-blur-2xl '>
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
			</div>
        </div>
        
	);
};

export default BottomCart;


