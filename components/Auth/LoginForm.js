import {useContext, useState} from 'react';
import {auth} from '../../firebase';
import {useRouter} from 'next/router';
import {loginContext} from './loginContext';

const LoginForm = () => {
	const {SwitchToSignUp} = useContext(loginContext);
	const router = useRouter();
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const {email, password} = user;

	const onChange = (e) => setUser({...user, [e.target.name]: e.target.value});

	const signIn = (e) => {
		e.preventDefault();
		auth.signInWithEmailAndPassword(email, password).then((auth) => {
			router.push('/');
		});
	};

	return (
		<>
			<form>
				<input
					type='email'
					placeholder='Email'
					className='block w-full px-5 text-base border border-gray-300 rounded text-gray-800 transition-all duration-100 ease h-12 mb-3 bg-gray-300'
					value={email}
					name='email'
					onChange={onChange}
					required
				/>
				<input
					type='password'
					placeholder='password'
					className='block w-full px-5 text-base border border-gray-300 rounded text-gray-800 transition-all duration-100 ease h-12 mb-3 bg-gray-300'
					value={password}
					name='password'
					onChange={onChange}
					required
				/>
				<button
					onClick={signIn}
					className='px-8 text-base font-bold cursor-pointer transition-all duration-100 ease w-full rounded flex items-center justify-center flex-shrink-0 text-center border-0 text-white h-12 bg-green-600'>
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
				Don't have any account?
				<button
					onClick={SwitchToSignUp}
					className='bg-transparent border-0 otline-0 font-bold underline text-green-700 cursor-pointer'>
					SignUp
				</button>
			</p>
			<p className='p-5 text-base font-medium text-gray-500'>
				Forgot your password?
				<button className='bg-transparent border-0 otline-0 font-bold underline text-green-700 cursor-pointer'>
					Reset It
				</button>
			</p>
		</>
	);
};

export default LoginForm;
/**
background-color: transparent;
    border: 0px;
    outline: 0px;
    box-shadow: none;
    padding: 0px;
    font-size: calc(14px);
    font-weight: 700;
    color: rgb(0, 158, 127);
    text-decoration: underline;
    cursor: pointer;

 */
