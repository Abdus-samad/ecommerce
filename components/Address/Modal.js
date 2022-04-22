import { XIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import AddressContext from '../../context/Address/addressContext';

const Modal = ({ open, setOpen }) => {
	const addressContext = useContext(AddressContext);
	const { addAddress, updateAddress, current } = addressContext;

	useEffect(() => {
		if (current !== null) {
			setAddress(current);
		} else {
			setAddress({
				text: '',
				type: 'Home',
			});
		}
	}, [addressContext, current]);

	const [address, setAddress] = useState({
		text: '',
		type: 'Home',
	});
	const { type, text } = address;

	const onChange = (e) =>
		setAddress({ ...address, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if (current === null) {
			addAddress(address);
		} else {
			updateAddress(address);
		}

		setAddress({
			text: '',
			type: 'Home',
		});
		setOpen(false);
	};
	if (!open) return null;

	return (
		<div style={{ overflow: 'hidden' }}>
			<div className='h-full w-full bg-[#0b0b0b] fixed top-0 left-0 z-[1042] overflow-hidden opacity-[0.8]' />
			<button onClick={() => setOpen(false)} className='Close'>
				<XIcon className='w-8 h-8' />
			</button>
			<div className='top-0 left-0 w-full h-full z-[1042] overflow-hidden fixed'>
				<div className='top-0 left-0 w-full h-full z-[1042] overflow-hidden fixed'>
					<div className='max-w-full mx-auto z-[1045] align-middle relative'>
						<div className='absolute w-[400px] lg:w-[400px] h-auto bg-primary-100 mt-[200px] p-[30px] left-[20%] lg:left-[40%] transition-all duration-500 ease-in-out'>
							<form onSubmit={onSubmit}>
								<h2 className='mb-4 text-xl font-bold text-gray-800'>
									{current ? 'Edit Address' : 'Add Address'}
								</h2>

								<div className='flex flex-col w-full'>
									<label>Type</label>
									<div className='flex items-center mb-4'>
										<input
											type='radio'
											name='type'
											value='Home'
											checked={type === 'Home'}
											onChange={onChange}
											className='pr-4'
										/>{' '}
										Home
										<input
											type='radio'
											name='type'
											value='Office'
											checked={type === 'Office'}
											onChange={onChange}
											className='ml-4'
										/>{' '}
										Office
									</div>
									<textarea
										placeholder='Enter Address'
										name='text'
										value={text}
										onChange={onChange}
										className='w-full rounded-[6px] border border-primary-primary 
										text-gray-900 font-normal text-base px-[18px] focus:outline-none h-auto
										 min-h-[171px] pt-[15px] resize-none'></textarea>
								</div>
								<input
									type='submit'
									style={{ width: '100%', height: '44px' }}
									className='ModalBtn'
									value={
										current
											? 'Edit Address'
											: 'Save Address'
									}
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Modal.propTypes = {
	setOpen: PropTypes.func.isRequired,
};

export default Modal;

/* 


*/
