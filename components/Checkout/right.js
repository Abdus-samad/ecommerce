import Address from '../Address/AddressCheckout';
import Delivery from './Delivery';
import Contact from '../contact/contactCheckout';
import Payment from '../payment/Payment'


const right = () => {
	return (
		<div className='relative flex flex-col w-full p-5 mr-5 overflow-hidden order'>
			<Address />
			<Contact />
			<Delivery />
			<Payment />
		</div>
	);
};

export default right;
