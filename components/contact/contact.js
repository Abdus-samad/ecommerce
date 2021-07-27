import {PencilIcon, XIcon} from '@heroicons/react/solid';
import {useState, useEffect} from 'react';
import Modal from './Modal';
import data from './data';

const contact = () => {
	const [open, setOpen] = useState(false);
	const [current, setCurrent] = useState(false);

	useEffect(() => {
		setCurrent(data[0]);
	}, []);

	return (
		<div className='mb-10 box-border -mx-2 flex-initial flex-wrap flex-row'>
			<div className='box-boder flex-4 px-2 dp'>
				<h3 className='text-base mb-6 flex items-center text-gray-800 font-semibold'>
					Contact Number
				</h3>
				<div className='flex flex-col flex-wrap'>
					<div className='flex-grow flex flex-wrap justify-between'>
						{data.map((item, index) => (
							<label
								onClick={() => setCurrent(item)}
								key={index}
								className={
									current === item
										? 'contact label nb active'
										: 'contact label nb'
								}>
								<span className='text-sm font-bold text-gray-800 mb-1'>
									{item.type}
								</span>
								<span className='text-base font-normal text-gray-600'>
									{item.number}
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
						<button
							onClick={() => setOpen(true)}
							className='button add'>
							Add Contact
						</button>
					</div>
				</div>
			</div>
			<Modal open={open} close={() => setOpen(false)} />
		</div>
	);
};

export default contact;
