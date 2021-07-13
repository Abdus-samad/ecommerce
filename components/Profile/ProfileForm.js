import {useState} from 'react';
import FormModal from '../Modals/FormModal';
import {PencilIcon, XIcon, PlusIcon } from '@heroicons/react/solid';
const ProfileForm = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className='proContainer '>
			<div className='flex flex-col w-full'>
				<div className='w-full flex items-center justify-between mb-6'>
					<h3 className='text-xl font-semibold text-gray-800'>
						Your Profile
					</h3>
				</div>
				<div
					className='  '
					style={{
						marginBottom: '50px',
						display: 'flex',
					}}>
					<div className='formContent basis'>
						<label className='font-bold text-sm text-gray-800 leading-4 mb-4 flex'>
							Name
						</label>
						<input
							type='text'
							label='Name'
							name='name'
							height='48px'
							className='block form'
							value='Alex Hunter'
						/>
					</div>
					<div className='formContent basis ex'>
						<label className='font-bold text-sm text-gray-800 leading-4 mb-4 flex'>
							Email
						</label>
						<input
							type='text'
							label='Name'
							name='name'
							height='48px'
							className='block form'
							value='alexh@gmail'
						/>
					</div>
					<div className='formContent basis ce ex'>
						<a style={{width: '100%'}} className='formBtn mt-8'>
							Save
						</a>
					</div>
				</div>
				<div className='mb-10 box-border -mx-2 flex-initial flex-wrap flex-row'>
					<div className='box-boder flex-4 px-2 dp'>
						<h3 className='text-base mb-6 flex items-center text-gray-800 font-semibold'>
							Contact Number
						</h3>
						<div className='flex flex-col'>
							<div className='flex-grow flex flex-wrap justify-between'>
								<label className='contact-1 label nb'>
									<span className='text-sm font-bold text-gray-800 mb-1'>
										Primary
									</span>
									<span className='text-base font-normal text-gray-600'>
										09090463445
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
								<button className='button add'>
									Add Contact
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='mb-10 box-border -mx-2 flex-initial flex-wrap flex-row'>
					<div className='box-boder flex-4 px-2 dp relative'>
						<h3 className='text-base mb-6 flex items-center text-gray-800 font-semibold'>
							Delivery Address
						</h3>
						<div className='flex flex-col'>
							<div className='flex-grow flex flex-wrap justify-between'>
								<label className='contact-1 label nb'>
									<span className='text-sm font-bold text-gray-800 mb-1'>
										Home
									</span>
									<span className='text-base font-normal text-gray-600'>
										27 Street, 2569 Heritage Road Visalia,
										CA 93291
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
								<label className='contact-2 label nb'>
									<span className='text-sm font-bold text-gray-800 mb-1'>
										Office
									</span>
									<span className='text-base font-normal text-gray-600'>
										33 Baker Street, Crescent Road, CA 65746
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
								<button className='button add'>
									Add Address
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='mb-10 box-border -mx-2 flex-initial flex-wrap flex-row'>
					<div className='box-boder flex-4 px-2 dp relative'>
					<h3 className='text-base mb-6 flex items-center text-gray-800 font-semibold'>
							Payment Option
					</h3>
					<header className='flex justify-between items-center -mt-4'>
						<span className='text-sm font-bold text-green-600 block'>Saved Cards</span>
						<a className='text-sm font-bold text-green-600 h-10 card'>
							<span className='mr-2'><PlusIcon className='h-4' /> </span>
							Add Cards
						</a>
					</header>
					<div className='mt-4 -mx-3 relative'>
						
					</div>
					</div> 
				</div>
			</div>
		</div>
	);
};

export default ProfileForm;

/**
margin-top: 15px;
    margin-left: -10px;
    margin-right: -10px;
    position: relative;

 */
