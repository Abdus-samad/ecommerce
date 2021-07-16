import {PlusIcon} from '@heroicons/react/solid';
import {useState} from 'react';
import Modal from './Modal';
import PaymentCard from './PaymentCard';

const Payment = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className='mb-10 box-border -mx-2 flex-initial flex-wrap flex-row'>
			<div className='box-boder flex-4 px-2 dp basis relative'>
				<h3 className='text-base mb-6 flex items-center text-gray-800 font-semibold'>
					Payment Option
				</h3>
				<header className='flex justify-between items-center -mt-4'>
					<span className='text-sm font-bold text-green-600 block'>
						Saved Cards
					</span>
					<a
						onClick={() => setOpen(true)}
						className='text-sm font-bold text-green-600 h-10 card'>
						<span className='mr-2'>
							<PlusIcon className='h-4' />
						</span>
						Add Cards
					</a>
				</header>
				<div className='mt-4 -mx-3 relative'>
					<PaymentCard />
				</div>
			</div>
			<Modal open={open} close={() => setOpen(false)} />
		</div>
	);
};

export default Payment;
