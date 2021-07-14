import {useState} from 'react';
import FormModal from '../Modals/FormModal';
import {PencilIcon, XIcon, PlusIcon} from '@heroicons/react/solid';
import Payment from '../payment/Payment';
const ProfileForm = () => {
	const [open, setOpen] = useState(false);

	return (
		<div classnames>
			<div className='w-full flex items-center justify-between mb-6'>
				<h3 className='text-xl font-semibold text-gray-800'>
					Your Profile
				</h3>
			</div>
			<div
				className='  formContainer  '
				style={{
					marginBottom: '50px',
					display: 'flex',
				}}>
				<div
					className='formContent basis ex
				'>
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
