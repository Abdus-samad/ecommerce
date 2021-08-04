import {XIcon} from '@heroicons/react/outline';
import {useRouter} from 'next/router';
import AuthContext from '../../context/Auth/authContext';
import Data from './data';
import {auth} from '../../firebase';
import {useEffect, useContext} from 'react';
import Link from 'next/link';

const Drawer = (props) => {
	const router = useRouter();

	const authContext = useContext(AuthContext);
	const {user, getUser} = authContext;

	const handleAuth = () => {
		if (user) {
			auth.signOut();
		}
	};

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			getUser(authUser);
			console.log(authUser);
		});
	}, []);

	return (
		<div className={props.drawer ? 'menu active' : 'menu'}>
			<ul className='w-full max-h-full overflow-y-scroll'>
				<li className='w-full h-20 flex justify-start items-center'>
					<a className='ml-8'>
						<XIcon className='h-5' onClick={props.showDrawer} />
					</a>
				</li>
				<div className='bg-gray-100 p-11'>
					{!!user ? (
						<div className='flex items-center '>
							<div className='w-12 h-12 flex-shrink block overflow-hidden mr-4 rounded-3xl'>
								<img
									src='/use.jpeg'
									className='w-full h-auto block'
								/>
							</div>
							<div>
								<h3 className='text-sm font-bold mb-2 text-gray-800'>
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
								style={{width: '100%'}}
								className='px-8 text-sm tr flex-shrink-0 text-center h-10 cursor-pointer text-white bg-green-600 hover:bg-green-700 rounded-md flex items-center justify-center'>
								Join
							</button>
						</a>
					)}
				</div>
				<div className='py-10'>
					<div>
						{Data.map((item, index) => {
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
				<div className='py-11 border-t'>
					<div>
						<span
							onClick={handleAuth}
							className='block font-normal text-gray-800 relative pf'>
							Logout
						</span>
					</div>
				</div>
			</ul>
		</div>
	);
};

export default Drawer;
