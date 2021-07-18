import { ShoppingBagIcon, XIcon } from "@heroicons/react/outline";
import { useContext } from "react";
import CurrencyFormat from "react-currency-format";
import CartContext from "../../context/Cart/cartContext";
import Empty from "../Icon/Empty";
import CartProduct from './CartProduct';


const Cartdrawer = (props) => {

	const cartContext = useContext(CartContext);
	const {cart, loading} = cartContext;

	const getCartTotal = (cart) =>
		cart?.reduce(
			(amount, item) => Number(item.price * item.count) + amount,
			0
		);

    return (
        <div className={props.Carts ? 'bottom active' : 'bottom'}>
        <div className='w-full h-full flex flex-col rounded bg-white box-content'>
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
                    <XIcon className='h-5' onClick={props.showCarts} />
                </a>
            </div>
            <div className='max-h-full w-full overflow-auto scrollbar'>
                {!loading && cart.length === 0 ? (
                    <div className='max-h-full bg-white'>
                        <div className='flex items-center justify-center mb-5 mt-12'>
                            <Empty />
                        </div>
                        <span className='text-base pl-52 font-bold text-gray-700 w-full py-10 text-center'>
                            No Product Found
                        </span>
                    </div>
                ) : (
                    cart.map((item) => (
                        <CartProduct
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            images={item.images}
                            price={item.price}
                            rating={item.rating}
                            count={item.count}
                        />
                    ))
                )}
            </div>
            <div className='w-full flex flex-col mt-auto'>
                <span className='my-5 flex justify-center'>
                    <button className='inline-flex bg-transparent text-base font-bold text-green-700 transition duration-100 ease'>
                        Do you have voucher
                    </button>
                </span>
                <button
                    className='h-11 w-5/6 flex items-center justify-between bg-green-600 shadow outline mb-4 ml-4'
                    >
                    <CurrencyFormat
                        renderText={(value) => (
                            <>
                                <a className='w-full flex items-center justify-between pl-7 text-base font-bold text-white pr-2'>
                                    Checkout
                                </a>
                                <span className='h-10 w-auto px-7 rounded-3xl inline-flex text-base font-bold text-green-600 items-center justify-center bg-white'>
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
            </div>
        </div>
    </div>

    )
}

export default Cartdrawer
