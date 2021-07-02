import { useState } from 'react';
import FormModal from '../Modals/FormModal'


const ProfileForm = () => {
	const [open, setOpen] = useState(false)

	return (
		<div
			className='p-5 h-auto min lg:w-auto t flex lg:flex-col lg:tbx lg:border lg:border-gray-300'>
			<div className='flex flex-col w-full'>
				<div className='w-full flex items-center justify-between mb-6'>
					<h3 className='text-xl font-semibold text-gray-800'>
						Your Profile
					</h3>
				</div>
				<div
					className=' lg:mb-10 box-border -mx-2 lg:flex-initial flex-wrap flex-col lg:flex-row '
					style={{
						marginBottom: '50px',
						display: 'flex',
					}}>
					<div className='box-border lg:flex-grow-0 flex-shrink-0 lg:px-2'>
						<label className='font-bold text-sm text-gray-800 leading-4 mb-4 flex'>
							Name
						</label>
						<input
							type='text'
							label='Name'
							name='name'
							height='48px'
							className='block w-full px-5 border-solid border-gray-100 h-12 text-sm rounded-md text-gray-800 bg-gray-200'
							value='Alex Hunter'
						/>
					</div>
					<div className='box-border lg:flex-grow-0 flex-shrink-0 lg:px-2'>
						<label className='font-bold text-sm text-gray-800 leading-4 mb-4 flex'>
							Email
						</label>
						<input
							type='text'
							label='Name'
							name='name'
							height='48px'
							className='block w-full px-5 border-solid border-gray-100 h-12 text-sm rounded-md text-gray-800 bg-gray-200'
							value='alexh@gmail'
						/>
					</div>
					<div className='box-border lg:flex-grow-0 flex-shrink-0 lg:px-2'>
						<a
							style={{width: '100%'}}
							className='mt-8 px-8 text-sm tr flex-shrink-0 text-center h-12 cursor-pointer text-white bg-green-600 hover:bg-green-700 rounded-md flex items-center justify-center'>
							Save
						</a>
					</div>
				</div>
				<div className='mb-10 box-border -mx-2 flex-initial flex-wrap flex-row'>
					<div className='box-boder flex-initial px-2'>
						<h3 className='text-base mb-6 flex items-center text-gray-800 font-semibold'>Contact Number</h3>
						<div className='flex flex-col lg:flex-row'>
							<div className='flex-grow flex flex-wrap '>
								<a
								onClick={() => {
									setOpen(true)
								}}
								className='flex-col text-left flex inline p-4 border border-green-800 bg-white cursor-pointer'>
								<span className='font-bold mb-1 text-sm'>Primary</span>
								<span className='text-base font-medium text-gray-800'>08054176385</span>
								</a>
								{open && <FormModal close={setOpen}/>}
								<a
								onClick={() => {
									setOpen(true)
								}}
								className='flex-auto flex-col text-left inline p-4 border border-green-800 bg-white'>
								<span className='font-bold mb-1 text-sm'>Primary</span>
								</a>
								{open && <FormModal close={setOpen}/>}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileForm;
/*
font-family: Lato, sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: rgb(66, 69, 97);

 */
