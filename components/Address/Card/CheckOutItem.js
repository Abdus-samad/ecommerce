import { useContext } from 'react';
import PropTypes from 'prop-types';
import { PencilIcon, XIcon } from '@heroicons/react/solid';
import AddressContext from '../../../context/Address/addressContext';


const CheckOutItem = ({ add, setActive, active, setOpen }) => {
	const addressContext = useContext(AddressContext);
	const { deleteAddress, setCurrent, clearCurrent } = addressContext;
	const { id, text, type } = add;

	const onDelete = () => {
		deleteAddress(id);
		clearCurrent();
	};

	return (
		<label
			onClick={() => setActive(add)}
			className={
				active === add
					? 'dv CheckoutAdress active nb'
					: 'dv CheckoutAdress nb'
			}>
			<span className='text-[13px] font-medium text-[#0d1136] mb-[5px]'>
				{type.charAt(0).toUpperCase() + type.slice(1)}
			</span>
			{text && (
				<span className='text-base font-normal text-[#424561]'>
					{text}
				</span>
			)}
			<span className='btn wrap'>
				<span
					onClick={() => {
						setOpen(true);
						setCurrent(add);
					}}
					className='bg-green-600 contactBtn'>
					<PencilIcon className='h-4' />{' '}
				</span>
				<span className='bg-red-500 contactBtn'>
					<XIcon className='h-4' onClick={onDelete} />{' '}
				</span>
			</span>
		</label>
	);
};

CheckOutItem.propTypes = {
	add: PropTypes.object.isRequired,
	setOpen: PropTypes.func.isRequired,
	active: PropTypes.any.isRequired,
	setActive: PropTypes.func.isRequired,
};
export default CheckOutItem;
