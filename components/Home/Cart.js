import { ShoppingCartIcon } from '@heroicons/react/solid'



const Cart = () => {
    return (
        <div className='h-auto w-auto right-0 z-90 top -mt-11 flex flex-col items-center justify-center bg-green-600 p-0 rounded-xl shadow-md border-0 cursor-pointer fixed'>
            <a className='text-sm flex items-center justify-center tp text-white'>
            <span>
                <ShoppingCartIcon className='h-5' />
            </span>
            0 Item
            </a>
            <span className='h-8 w-auto rounded-lg overflow-hidden flex items-center justify-center bg-white text-green-600 tm'>$2.00</span>
        </div>
    )
}

export default Cart
