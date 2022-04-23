import { useState } from 'react';

const ProfileForm = () => {
	const [profile, setProfile] = useState({
		name: '',
		email: '',
	});

	const { name, email } = profile;

	const onChange = (e) =>
		setProfile({ ...profile, [e.target.name]: e.target.value });

	return (
		<div>
			<div className='flex items-center justify-between w-full mb-6'>
				<h3 className='text-xl font-semibold text-gray-800'>
					Your Profile
				</h3>
			</div>
			<div
				className=' formContainer'
				style={{
					marginBottom: '50px',
					display: 'flex',
				}}>
				<div
					className='formContent basis ex '>
					<label className='flex mb-4 text-sm font-bold leading-4 text-gray-800'>
						Name
					</label>
					<input
						type='text'
						label='Name'
						name='name'
						height='48px'
						className='block form'
						value={name}
						onChange={onChange}
					/>
				</div>
				<div className='formContent basis ex'>
					<label className='flex mb-4 text-sm font-bold leading-4 text-gray-800'>
						Email
					</label>
					<input
						type='text'
						label='Name'
						name='email'
						height='48px'
						className='block form'
						value={email}
						onChange={onChange}
					/>
				</div>
				<div className='formContent basis ce ex'>
					<a style={{ width: '100%' }} className='mt-8 formBtn'>
						Save
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProfileForm;

