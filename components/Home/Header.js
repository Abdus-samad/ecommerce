import { MenuIcon, SearchIcon } from '@heroicons/react/outline';
import { useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import { QuestionMarkCircleIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import Topfiltered from '../Side/Topfiltered';
import FilterDrawer from '../Side/FilterDrawer';
import BackDrop from '../Drawer/BackDrop';
import { auth } from '../../firebase';
import AuthContext from '../../context/Auth/authContext';
import HeaderOp from '../Reuseables/HeaderOp';

const Header = (props) => {
	const authContext = useContext(AuthContext);
	const { user, getUser } = authContext;

	const [drawer, setDrawer] = useState(false);

	const showDrawer = () => setDrawer(!drawer);

	let backdrop;

	if (drawer) {
		backdrop = <BackDrop showDrawer={showDrawer} />;
	}

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			getUser(authUser);
			console.log(authUser);
		});
	}, []);
	return (
		<>
			<div className='sticky top-0 z-20 flex flex-wrap items-center justify-between p-3 px-10 bg-white border-b shadow'>
				<a className='z-10 ml-8 lg:hidden'>
					<MenuIcon className='h-6' onClick={props.showDrawer} />
				</a>
				<Link href='/'>
					<a className='inline-flex items-center p-2 ml-8'>
						<Image
							src='/download.svg'
							width={120}
							height={50}
							className='cursor-pointer'
						/>
					</a>
				</Link>
				<form className='flex-grow hidden max-w-2xl px-6 py-3 ml-32 border rounded border-secondary-shade1 bg-secondary-light lg:items-center lg:justify-center lg:flex'>
					<SearchIcon className='h-6 text-gray-500 sm:inline-flex' />
					<input
						className='flex-grow w-full ml-4 bg-secondary-light focus:outline-none'
						type='text'
						placeholder='Search your products from here'
					/>
				</form>

				<div className='items-start hidden w-full lg:inline-flex lg:flex-row lg:w-auto lg:items-center lg:h-auto'>
					<Link href='/'>
						<a className='items-center justify-center w-full px-3 py-2 font-bold text-gray-700 rounded lg:inline-flex lg:w-auto hover:text-green-700'>
							Offer
						</a>
					</Link>
					<Link href='/help'>
						<a className='items-center justify-center w-full px-3 py-2 font-bold text-gray-700 rounded lg:inline-flex lg:w-auto hover:text-green-700'>
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
								className='flex items-center justify-center flex-shrink-0 h-10 px-8 text-sm text-center text-white rounded-md cursor-pointer bg-secondary-main tr hover:bg-secondary-100'>
								Join
							</button>
						</a>
					)}
				</div>
				<Topfiltered showDrawer={showDrawer} />
				<FilterDrawer drawer={drawer} showDrawer={showDrawer} />
				{backdrop}
			</div>
		</>
	);
};

export default Header;
