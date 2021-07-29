import Address from '../Address/AddressCheckout';
import Delivery from './Delivery';
import Contact from '../contact/contactCheckout';
import Payment from '../payment/Payment'


const right = () => {
	return (
		<div className='relative w-full overflow-hidden flex flex-col mr-5 p-5 order'>
			<Address />
			<Delivery />
			<Contact />
			<Payment />
		</div>
	);
};

export default right;
