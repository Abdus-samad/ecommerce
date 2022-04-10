import { PencilIcon, XIcon } from '@heroicons/react/solid';
import { useState, useEffect } from 'react';
import Modal from '../Address/Modal';
import data from './data';

const Address = () => {
	const [current, setCurrent] = useState(false);

	const [open, setOpen] = useState(false);

	useEffect(() => {
		setCurrent(data[0]);
	}, []);

	return (
		<div className='box-border flex-row flex-wrap flex-initial mb-10 -mx-2'>
			<div className='box-border relative px-2 flex-4 dp'>
				<h3 className='flex items-center mb-6 text-base font-semibold text-gray-800'>
					Delivery Address
				</h3>
				<div className='flex flex-col'>
					<div className='flex flex-wrap justify-between flex-grow'>
						{data.map((item, index) => (
							<label
								onClick={() => setCurrent(item)}
								key={index}
								className={
									current === item
										? 'contact label nb active'
										: 'contact label nb'
								}>
								<span className='mb-1 text-sm font-bold text-gray-800'>
									{item.name}
								</span>
								<span className='text-base font-normal text-gray-600'>
									{item.address}
								</span>
								<span className='btn wrap'>
									<span
										onClick={() => setOpen(true)}
										className='bg-green-600 contactBtn'>
										<PencilIcon className='h-4' />{' '}
									</span>
									<span className='bg-red-500 contactBtn'>
										<XIcon className='h-4' />{' '}
									</span>
								</span>
							</label>
						))}

						<button
							onClick={() => setOpen(true)}
							className='button add'>
							Add Address
						</button>
					</div>
				</div>
			</div>
			{open && <Modal open={open} close={() => setOpen(false)} />}
		</div>
	);
};

export default Address;
