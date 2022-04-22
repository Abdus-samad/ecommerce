import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { PencilIcon, XIcon } from '@heroicons/react/solid';
import ProfileContext from '../../context/Profile/profileContext';

const ContactItem = ({ contact, setOpen, setActive, active }) => {
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
				active === contact
					? 'contact label nb active'
					: 'contact label nb'
			}>
			<span className='mb-1 text-sm font-bold text-gray-800'>
				{type.charAt(0).toUpperCase() + type.slice(1)}
			</span>

			{number && (
				<span className='text-base font-normal text-gray-600'>
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

ContactItem.propTypes = {
	contact: PropTypes.object.isRequired,
	setOpen: PropTypes.func.isRequired,
	active: PropTypes.any.isRequired,
	setActive: PropTypes.func.isRequired,
};

export default ContactItem;
