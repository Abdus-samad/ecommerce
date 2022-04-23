import React, { useContext } from 'react';
import { PencilIcon, XIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';
import AddressContext from '../../../context/Address/addressContext';

const AddressItem = ({ add, setActive, active, setOpen }) => {
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
				active === add ? 'contact label nb active' : 'contact label nb'
			}>
			<span className='mb-1 text-sm font-bold text-gray-800'>
				{type.charAt(0).toUpperCase() + type.slice(1)}
			</span>
			{text && (
				<span className='text-base font-normal text-gray-600'>
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

AddressItem.propTypes = {
	add: PropTypes.object.isRequired,
	setOpen: PropTypes.func.isRequired,
	active: PropTypes.any.isRequired,
	setActive: PropTypes.func.isRequired,
};
export default AddressItem;
