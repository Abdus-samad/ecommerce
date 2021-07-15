import {PencilIcon, XIcon} from '@heroicons/react/solid';
import {useState} from 'react';
import Modal from './Modal';

const contact = () => {
	const [open, setOpen] = useState(false);


	return (
		<div className='mb-10 box-border -mx-2 flex-initial flex-wrap flex-row'>
			<div className='box-boder flex-4 px-2 dp'>
				<h3 className='text-base mb-6 flex items-center text-gray-800 font-semibold'>
					Contact Number
				</h3>
				<div className='flex flex-col flex-wrap'>
					<div className='flex-grow flex flex-wrap justify-between'>
						<label className='contact-1 label nb'>
							<span className='text-sm font-bold text-gray-800 mb-1'>
								Primary
							</span>
							<span className='text-base font-normal text-gray-600'>
								09090463445
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
						<label className='contact-2 label nb'>
							<span className='text-sm font-bold text-gray-800 mb-1'>
								Secondary
							</span>
							<span className='text-base font-normal text-gray-600'>
								08077436736
							</span>
							<span className='btn wrap'>
								<span className='contactBtn bg-green-600'>
									<PencilIcon className='h-4' />{' '}
								</span>
								<span className='contactBtn bg-red-500'>
									<XIcon className='h-4' />{' '}
								</span>
							</span>
						</label>
						<button className='button add'>Add Contact</button>
					</div>
				</div>
			</div>
			<Modal open={open} close={() => setOpen(false)} />
		</div>
	);
};

export default contact;
