import { useContext, useState } from 'react';
import { loginContext } from './loginContext';
import { auth } from '../../firebase';
import { useRouter } from 'next/router';

const SignUp = () => {
	const router = useRouter();

	const { SwitchToSignIn } = useContext(loginContext);

	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const { email, password } = user;

	const onChange = (e) =>
		setUser({ ...user, [e.target.name]: e.target.value });

	const register = (e) => {
		e.preventDefault();
		auth.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) {
					router.push('/');
				}
			})
			.catch((error) => alert(error.message));
	};

	return (
		<>
			<form className=''>
				<input
					type='email'
					placeholder='Email'
					className='block w-full h-12 px-5 mb-3 text-base text-gray-800 transition-all duration-100 bg-gray-300 border border-gray-300 rounded ease'
					value={email}
					name='email'
					onChange={onChange}
					required
				/>
				<input
					type='password'
					placeholder='password'
					className='block w-full h-12 px-5 mb-3 text-base text-gray-800 transition-all duration-100 bg-gray-300 border border-gray-300 rounded ease'
					value={password}
					name='password'
					onChange={onChange}
					required
				/>
				<p className='w-full mb-2 text-xs font-medium text-center text-gray-800 pt-[20px]'>
					By signing up, you agree to Pickbazar's <br/>
					<a className='font-bold text-blue-800 underline'>
						Terms & Condtion
					</a>
				</p>
				<button
					onClick={register}
					className='flex items-center justify-center flex-shrink-0 w-full h-12 px-8 text-base font-bold text-center text-white transition-all duration-100 border-0 rounded cursor-pointer bg-secondary-main ease'>
					{' '}
					Continue
				</button>
			</form>
			<div className='relative flex items-center justify-center w-full py-4'>
				<span className='relative px-3 text-base font-medium text-gray-800'>
					or
				</span>
			</div>
			<button className='flex items-center justify-center flex-shrink-0 w-full h-12 px-8 mb-4 text-base font-bold text-center text-white transition-all duration-100 bg-blue-600 border-0 rounded cursor-pointer ease'>
				Continue with Google
			</button>
			<p className='p-5 text-base font-medium text-gray-500'>
				Already have an account?
				<button
					onClick={SwitchToSignIn}
					className='font-bold text-green-700 underline bg-transparent border-0 cursor-pointer otline-0'>
					Login
				</button>
			</p>
		</>
	);
};

export default SignUp;
