import PropTypes from 'prop-types';
import { XIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { badSuspension } from '../../animation';
import ProfileContext from '../../context/Profile/profileContext';

const Modal = ({ open, setOpen }) => {
	const profileContext = useContext(ProfileContext);
	const { addContact, updateContact, current } = profileContext;

	useEffect(() => {
		if (current !== null) {
			setContact(current);
		} else {
			setContact({
				number: '',
				type: 'Primary',
			});
		}
	}, [profileContext, current]);

	const [contact, setContact] = useState({
		number: '',
		type: 'Primary',
	});
	const { type, number } = contact;

	const onChange = (e) =>
		setContact({ ...contact, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if (current === null) {
			addContact(contact);
		} else {
			updateContact(contact);
		}

		setContact({
			number: '',
			type: 'Primary',
		});
		setOpen(false);
	};

	if (!open) return null;

	return (
		<main style={{ oveflow: 'hidden' }}>
			<div className='h-screen w-full bg-[#0b0b0b] fixed top-0 left-0 z-[1042] overflow-hidden opacity-[0.8]' />
			<button onClick={() => setOpen(false)} className='Close'>
				<XIcon className='w-8 h-8' />
			</button>
			<div className='top-0 left-0 w-full h-full z-[1042] overflow-hidden fixed'>
				<div className='top-0 left-0 w-full h-full z-[1042] overflow-hidden fixed'>
					<div className='max-w-full mx-auto z-[1045] align-middle relative'>
						<motion.div
							variants={badSuspension}
							initial='hidden'
							animate='visible'
							exit='exit'
							className='absolute lg:w-[400px] h-auto bg-primary-100 mt-[290px] p-[30px] lg:left-[37%] w-full md:w-[400px] md:left-[25%]'>
							<form onSubmit={onSubmit}>
								<h2 className='mb-4 text-xl font-bold text-gray-800'>
									{current ? 'Edit Contact' : 'Add Contact'}
								</h2>
								<div className='flex flex-col w-full mb-4'>
									<label>Type</label>
									<div className='flex items-center'>
										<input
											type='radio'
											name='type'
											value='Primary'
											checked={type === 'Primary'}
											onChange={onChange}
											className=''
										/>
										Primary
										<input
											type='radio'
											name='type'
											value='Secondary'
											checked={type === 'Secondary'}
											onChange={onChange}
											className='ml-4'
										/>{' '}
										Secondary
									</div>
									<label>Phone</label>
									<input
										type='text'
										name='number'
										value={number}
										onChange={onChange}
										className='w-full mb-3 h-[54px] rounded-[6px] border border-primary-primary text-gray-900 font-normal text-base px-[18px] focus:outline-none'
									/>
								</div>
								<input
									type='submit'
									style={{ width: '100%', height: '44px' }}
									className='ModalBtn'
									value={
										current
											? 'Edit Contact'
											: 'Save Contact'
									}
								/>
							</form>
						</motion.div>
					</div>
				</div>
			</div>
		</main>
	);
};

Modal.propTypes = {
	setOpen: PropTypes.func.isRequired,
};

export default Modal;
