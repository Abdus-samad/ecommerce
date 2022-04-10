import { MenuIcon } from '@heroicons/react/outline';
import { useContext, useEffect } from 'react';
import Image from 'next/image';
import { QuestionMarkCircleIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import AuthContext from '../../context/Auth/authContext';
import { auth } from '../../firebase';
import HeaderOp from '../Common/HeaderOp';
const Header = (props) => {
	const authContext = useContext(AuthContext);
	const { user, getUser } = authContext;

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			getUser(authUser);
		});
	}, []);
	return (
		<>
			<div className='sticky top-0 z-20 flex flex-wrap items-center p-3 bg-white border-b shadow'>
				<a className='z-10 ml-8 lg:hidden'>
					<MenuIcon className='h-6' onClick={props.showDrawer} />
				</a>
				<Link href='/'>
					<a className='inline-flex items-center p-2 ml-8'>
						<Image
							src='/download.svg'
							width={120}
							height={40}
							className='cursor-pointer'
						/>
					</a>
				</Link>

				<div className='items-start hidden w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>
					<Link href='/'>
						<a className='items-center justify-center w-full px-3 py-2 font-bold text-black rounded lg:inline-flex lg:w-auto'>
							Offer
						</a>
					</Link>
					<Link href='/help'>
						<a className='items-center justify-center w-full px-3 py-2 font-bold text-black rounded lg:inline-flex lg:w-auto'>
							<div className='flex cursor-pointer md:col-span-2 lg:col-span-1 lg:col-start-2'>
								<QuestionMarkCircleIcon className='h-5 mr-1' />
								Need Help
							</div>
						</a>
					</Link>
					{!!user ? (
						<HeaderOp />
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
			</div>
		</>
	);
};

export default Header;
