import { useContext, useState } from 'react';
import { auth } from '../../firebase';
import { loginContext } from './loginContext';

const Reset = () => {
	const { SwitchToLogin } = useContext(loginContext);
	const [user, setUser] = useState({
		email: '',
	});

	const { email } = user;

	const onChange = (e) =>
		setUser({ ...user, [e.target.name]: e.target.value });

	const Reset = (e) => {
		e.preventDefault();
		auth.sendPasswordResetEmail(email);
	};
	return (
		<>
			<form>
				<input
					type='email'
					placeholder='Email'
					name='email'
					value={email}
					onChange={onChange}
					className='block w-full h-12 px-5 mb-3 text-base text-gray-800 
          transition-all duration-100 bg-gray-300 border border-gray-300 rounded ease'
				/>
				<button
					onClick={Reset}
					className='flex items-center justify-center flex-shrink-0 w-full h-12 px-8 text-base font-bold text-center text-white transition-all duration-100 bg-green-600 border-0 rounded cursor-pointer ease'>
					Continue
				</button>
			</form>
			<p className='p-5 text-base font-medium text-gray-500'>
				Back to{' '}
				<button
					onClick={SwitchToLogin}
					className='font-bold text-green-700 underline bg-transparent border-0 cursor-pointer otline-0'>
					Login
				</button>
			</p>
		</>
	);
};

export default Reset;
