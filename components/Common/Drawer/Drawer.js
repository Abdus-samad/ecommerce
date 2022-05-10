import { XIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { useEffect, useContext, useState } from 'react';
import Link from 'next/link';
import { drawer } from '../../../data';
import { AnimatePresence } from 'framer-motion';
import Auth from '../../Auth/Auth';
import { UserCircleIcon } from '@heroicons/react/solid';
import { useAuth } from '../../../context/Auth/auth';

const Drawer = (props) => {
	const router = useRouter();
	const [show, setShow] = useState(false);
	const { user, getUser, Logout } = useAuth();


	const popup = () => {
		setShow(!show);
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<div className={props.drawer ? 'menu active' : 'menu'}>
			<ul className='w-full max-h-full overflow-y-scroll'>
				<li className='flex items-center justify-start w-full h-20'>
					<a className='ml-8'>
						<XIcon className='h-5' onClick={props.showDrawer} />
					</a>
				</li>
				<div className='bg-gray-100 p-11'>
					{!!user ? (
						<div className='flex items-center '>
							<div className='flex-shrink block w-12 h-12 mr-4 overflow-hidden text-gray-500 rounded-3xl'>
								<UserCircleIcon
									src={user?.photoURL}
									className='block w-full h-auto'
								/>
							</div>
							<div>
								<h3 className='mb-2 text-sm font-bold text-gray-800'>
									{user.displayName}
								</h3>
								<span className='block text-xs font-normal'>
									09033356787
								</span>
							</div>
						</div>
					) : (
						<a onClick={popup}>
							<button
								style={{ width: '100%' }}
								className='flex items-center justify-center flex-shrink-0 h-10 px-8 text-sm text-center text-white bg-green-600 rounded-md cursor-pointer tr hover:bg-green-700'>
								Join
							</button>
						</a>
					)}
				</div>
				<div className='py-10'>
					<div>
						{drawer.map((item, index) => {
							return (
								<Link key={index} href={item.path}>
									<a
										className={`block pf font-normal relative mb-5 cursor-pointer ${
											router.asPath === item.path
												? 'text-green-800 border-l-4 border-green-800'
												: 'text-gray-800'
										}`}
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<span className=''>{item.title}</span>
									</a>
								</Link>
							);
						})}
					</div>
				</div>
				<div className='border-t py-11'>
					<div>
						<span
							onClick={() => Logout()}
							className='relative block font-normal text-gray-800 pf'>
							Logout
						</span>
					</div>
				</div>
			</ul>
			<AnimatePresence exitBeforeEnter>
				{show && (
					<div style={{ overflow: 'hidden' }}>
						<Auth popup={popup} />
					</div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Drawer;
