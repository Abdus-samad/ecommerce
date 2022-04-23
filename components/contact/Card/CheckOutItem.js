import { PencilIcon, PlusIcon, XIcon } from '@heroicons/react/solid';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProfileContext from '../../../context/Profile/profileContext';

const CheckOutItem = ({ contact, setOpen, setActive, active }) => {
	const profileContext = useContext(ProfileContext);
	const { deleteContact, setCurrent, clearCurrent } = profileContext;

	const { id, number, type } = contact;

	const onDelete = () => {
		deleteContact(id);
		clearCurrent();
	};

	return (
		<label
			onClick={() => setActive(contact)}
			className={
				active === contact ? 'dv ContactA active nb' : 'dv ContactA nb'
			}>
			<span className='text-[13px] font-medium text-[#0d1136] mb-[5px]'>
				{type.charAt(0).toUpperCase() + type.slice(1)}
			</span>
			{number && (
				<span className='text-base font-normal text-[#424561]'>
					{number}
				</span>
			)}
			<span className='btn wrap'>
				<span
					onClick={() => {
						setOpen(true);
						setCurrent(contact);
					}}
					className='bg-green-600 contactBtn'>
					<PencilIcon className='h-4' />{' '}
				</span>
				<span className='bg-red-500 contactBtn' onClick={onDelete}>
					<XIcon className='h-4' />{' '}
				</span>
			</span>
		</label>
	);
};

CheckOutItem.propTypes = {
	contact: PropTypes.object.isRequired,
	setOpen: PropTypes.func.isRequired,
	active: PropTypes.string.isRequired,
	setActive: PropTypes.func.isRequired,
};

export default CheckOutItem;
