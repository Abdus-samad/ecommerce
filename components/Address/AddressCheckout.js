import {PencilIcon, PlusIcon, XIcon} from '@heroicons/react/solid';
import {useState, useEffect} from 'react';
import data from './data';
import Modal from './Modal'

const Address = () => {
	const [open, setOpen] = useState(false);
	const [current, setCurrent] = useState(false);

	useEffect(() => {
		setCurrent(data[0]);
	}, []);

	return (
		<div className='addressContainer'>
			<h3 className='text-xl font-normal text-[#0d1136] mb-[35px] flex items-center iD'>
				Delivery Address
			</h3>
			<div className='flex flex-col'>
				<div className='flex-grow flex flex-wrap justify-start'>
					{data.map((item, index) => (
						<label
							onClick={() => setCurrent(item)}
							key={index}
							className={
								current === item
									? 'dv CheckoutAdress active nb'
									: 'dv CheckoutAdress nb'
							}>
							<span className='text-[13px] font-medium text-[#0d1136] mb-[5px]'>
								{item.name}
							</span>
							<span className='text-base font-normal text-[#424561]'>
								{item.address}
							</span>
							<span className='btn wrap'>
								<span
									onClick={() => setOpen(true)}
									className='contactBtn bg-green-600'>
									<PencilIcon className='h-4' />{' '}
								</span>
								<span className='contactBtn bg-red-500'>
									<XIcon className='h-4' />{' '}
								</span>
							</span>
						</label>
					))}
					<button onClick={() => setOpen(true)} className='checkoutBtn'>
						<div className='box-border mt-0 mr-2 mb-0 ml-0'>
							<PlusIcon className='h-[20px]' />
						</div>
						Add Address
					</button>
				</div>
			</div>
			<Modal open={open} close={() => setOpen(false)} />
		</div>
	);
};

export default Address;
