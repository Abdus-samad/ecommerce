import { XIcon } from '@heroicons/react/outline';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import SignUp from './SignUp';
import { useState } from 'react';
import { loginContext } from './loginContext';
import { motion } from 'framer-motion';
import { badSuspension, dropIn } from '../../animation';

const Auth = ({ popup }) => {
	const [active, setActive] = useState('signin');

	const SwitchToSignUp = () => {
		setActive('signup');
	};
	const SwitchToSignIn = () => {
		setActive('signin');
	};

	const ContextV = {
		SwitchToSignUp,
		SwitchToSignIn,
	};
	return (
		<div style={{ oveflow: 'hidden' }}>
			<div
				className='h-screen w-full bg-[#0b0b0b] fixed top-0 left-0 z-[1042] overflow-hidden opacity-[0.8]'
				onClick={popup}
			/>
			<button onClick={popup} className='Close'>
				<XIcon className='w-8 h-8' />
			</button>
			<div className='top-0 left-0 w-full h-full z-[1042] overflow-hidden fixed'>
				<div className='top-0 left-0 w-full h-full z-[1042] overflow-hidden fixed'>
					<div className='max-w-full mx-auto z-[1045] align-middle relative'>
						<loginContext.Provider value={ContextV}>
							<motion.div
								variants={badSuspension}
								initial='hidden'
								animate='visible'
								exit='exit'
								className='box-border flex items-center justify-center w-full h-full '>
								<div className='p-8 bg-white border rounded shadow lg:w-[458px] lg:top-[100px] md:top-[200px] top-[70px] h-auto absolute lg:left-[35%]'>
									<div className='box-border w-full h-full'>
										<div className='text-center bg-white'>
											<div className='pt-[2px] px-[30px]'>
												{active === 'signin' && (
													<div>
														<h3 className='mb-2 text-2xl font-semibold text-secondary-main'>
															Welcome Back
														</h3>
														<span className='block text-base font-normal text-gray-400 mb-7'>
															Login with your
															email & password
														</span>
													</div>
												)}
												{active === 'signup' && (
													<div>
														<h3 className='mb-2 text-2xl font-semibold text-secondary-main'>
															Sign Up
														</h3>
														<span className='block text-base font-normal text-gray-400 mb-7'>
															By signing up, you
															agree to Pickbazar's
														</span>
													</div>
												)}
												{active === 'signin' && (
													<LoginForm />
												)}
												{active === 'signup' && (
													<SignUp />
												)}
											</div>
										</div>
									</div>
								</div>
							</motion.div>
						</loginContext.Provider>
					</div>
				</div>
			</div>
		</div>
	);
};

Auth.propTypes = {
	popup: PropTypes.func.isRequired,
};

export default Auth;
