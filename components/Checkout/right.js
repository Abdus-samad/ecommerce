import Address from '../Address/AddressCheckout';
import Delivery from './Delivery';
import Contact from '../contact/contactCheckout';

const right = () => {
	return (
		<div className='relative w-full overflow-hidden flex flex-col mr-5 p-5'>
			<Address />
			<Delivery />
			<Contact />
		</div>
	);
};

export default right;
