import {useContext} from 'react';
import {loginContext} from './loginContext';

const SignUp = () => {
	const {SwitchToSignIn} = useContext(loginContext);
	return (
		<>
			<form className=''>
				<input
					type='email'
					placeholder='Email'
					className='block w-full px-5 text-base border border-gray-300 rounded text-gray-800 transition-all duration-100 ease h-12 mb-3 bg-gray-300'
				/>
				<input
					type='password'
					placeholder='password'
					className='block w-full px-5 text-base border border-gray-300 rounded text-gray-800 transition-all duration-100 ease h-12 mb-3 bg-gray-300'
				/>
				<p className='text-xs font-medium text-gray-800 w-full text-center da mb-2'>
					By signing up, you agree to Pickbazar's
					<a className='font-bold text-blue-800 underline'>
						Terms & Condtion
					</a>
				</p>
				<button className='px-8 text-base font-bold cursor-pointer transition-all duration-100 ease w-full rounded flex items-center justify-center flex-shrink-0 text-center border-0 text-white h-12 bg-green-600'>
					Continue
				</button>
			</form>
			<div className='py-4 w-full flex justify-center items-center relative'>
				<span className='text-base font-medium text-gray-800 px-3 relative'>
					or
				</span>
			</div>
			<button className='mb-4 px-8 text-base font-bold cursor-pointer transition-all duration-100 ease w-full rounded flex items-center justify-center flex-shrink-0 text-center border-0 text-white h-12 bg-blue-600'>
				Continue with Google
			</button>
			<p className='p-5 text-base font-medium text-gray-500'>
				Already have an account?
				<button
					onClick={SwitchToSignIn}
					className='bg-transparent border-0 otline-0 font-bold underline text-green-700 cursor-pointer'>
					Login
				</button>
			</p>
		</>
	);
};

export default SignUp;
