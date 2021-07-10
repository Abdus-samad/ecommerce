import {MenuIcon, SearchIcon} from '@heroicons/react/outline';
import {useState} from 'react';
import Image from 'next/image';
import {QuestionMarkCircleIcon} from '@heroicons/react/solid';
import Link from 'next/link';
import Topfiltered from '../Side/Topfiltered';
import FilterDrawer from '../Side/FilterDrawer';
import BackDrop from '../Drawer/BackDrop';

const Header = (props) => {
	const [drawer, setDrawer] = useState(false);

	const showDrawer = () => setDrawer(!drawer);

	let backdrop;

	if (drawer) {
		backdrop = <BackDrop showDrawer={showDrawer} />;
	}

	return (
		<>
			<div className='flex items-center flex-wrap justify-between p-3 sticky top-0 bg-white border-b z-20 shadow'>
				<a className='ml-8 z-10 lg:hidden'>
					<MenuIcon className='h-6' onClick={props.showDrawer} />
				</a>
				<Link href='/'>
					<a className='inline-flex items-center p-2 ml-8'>
						<Image
							src='/cover.png'
							width={120}
							height={50}
							className='cursor-pointer'
						/>
					</a>
				</Link>
				<form className='hidden  lg:flex flex-grow px-6 py-3 mx-8 border border-gray-200 bg-gray-200 rounded max-w-lg items-center'>
					<SearchIcon className='h-6 text-gray-500  sm:inline-flex' />
					<input
						className=' flex-grow ml-4 w-full bg-gray-200 focus:outline-none'
						type='text'
						placeholder='Search your products from here'
					/>
				</form>

				<div className='hidden lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start lg:h-auto'>
					<Link href='/'>
						<a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-700 font-bold items-center justify-center hover:text-green-700'>
							Offer
						</a>
					</Link>
					<Link href='/'>
						<a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-700  font-bold items-center justify-center hover:text-green-700'>
							<div className='flex md:col-span-2 lg:col-span-1 lg:col-start-2  cursor-pointer'>
								<QuestionMarkCircleIcon className='h-5 mr-1' />
								Need Help
							</div>
						</a>
					</Link>
					<a href='/login'>
						<button
							style={{width: '100%'}}
							className='px-8 text-sm tr flex-shrink-0 text-center h-10 cursor-pointer text-white bg-green-600 hover:bg-green-700 rounded-md flex items-center justify-center'>
							Join
						</button>
					</a>
				</div>
			<Topfiltered showDrawer={showDrawer} />
			<FilterDrawer drawer={drawer} showDrawer={showDrawer} />
			{backdrop}
			</div>
		</>
	);
};

export default Header;
