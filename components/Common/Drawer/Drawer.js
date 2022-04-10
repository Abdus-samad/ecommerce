import { XIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import AuthContext from '../../../context/Auth/authContext';
import { auth } from '../../../firebase';
import { useEffect, useContext } from 'react';
import Link from 'next/link';
import { drawer } from '../../../data';

const Drawer = (props) => {
	const router = useRouter();

	const authContext = useContext(AuthContext);
	const { user, getUser } = authContext;

	const handleAuth = () => {
		if (user) {
			auth.signOut();
		}
	};

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			getUser(authUser);
		});
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
							<div className='flex-shrink block w-12 h-12 mr-4 overflow-hidden rounded-3xl'>
								<img
									src='/Abd.png'
									className='block w-full h-auto'
								/>
							</div>
							<div>
								<h3 className='mb-2 text-sm font-bold text-gray-800'>
									Alex Hunter
								</h3>
								<span className='block text-xs font-normal'>
									09033356787
								</span>
							</div>
						</div>
					) : (
						<a href={!user && '/login'}>
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
							onClick={handleAuth}
							className='relative block font-normal text-gray-800 pf'>
							Logout
						</span>
					</div>
				</div>
			</ul>
		</div>
	);
};

export default Drawer;
