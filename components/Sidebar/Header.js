import {MenuIcon} from '@heroicons/react/outline';
import {XIcon} from '@heroicons/react/solid';
import {useState} from 'react';
import {Data} from './data';
import Image from 'next/image';
import {SearchIcon} from '@heroicons/react/outline';
import {QuestionMarkCircleIcon} from '@heroicons/react/solid';
import Link from 'next/link';
const Header = () => {
	const [drawer, setDrawer] = useState(false);

	const showDrawer = () => setDrawer(!drawer);

	return (
		<>
			<div className='flex items-center flex-wrap p-3 sticky top-0 bg-white border-b z-20 shadow'>
				<a className='ml-8 z-10 lg:hidden'>
					<MenuIcon className='h-5' onClick={showDrawer} />
				</a>
				<a className='inline-flex items-center p-2 sm:ml-24 ml-4'>
					<Image
						src='/download.svg'
						width={120}
						height={40}
						className='cursor-pointer'
					/>
				</a>
				<div className='hidden lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start lg:flex flex-col lg:h-auto'>
					<Link href='/'>
						<a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center'>
							Offer
						</a>
					</Link>
					<Link href='/'>
						<a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black  font-bold items-center justify-center'>
							<div className='flex md:col-span-2 lg:col-span-1 lg:col-start-2  cursor-pointer'>
								<QuestionMarkCircleIcon className='h-5 mr-1' />
								Need Help
							</div>
						</a>
					</Link>
					<Link href='/about'>
						<a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black  font-bold items-center justify-center'>
							About
						</a>
					</Link>
				</div>
			</div>
			<div className={drawer ? 'menu active' : 'menu'}>
				<ul className='w-full'>
					<li className='w-full h-20 flex justify-start items-center'>
						<a className='ml-8'>
							<XIcon className='h-5' onClick={showDrawer} />
						</a>
					</li>
					<div className='bg-gray-100 p-11'>
						<div className='flex items-center '>
							<div className='w-12 h-12 flex-shrink block overflow-hidden mr-4 rounded-3xl'>
								<Image
									src='/GreenLimes.jpg'
									width={200}
									height={200}
									className='w-full h-auto block'
								/>
							</div>
							<div>
								<h3 className='text-sm font-bold mb-2 text-gray-800'>Alex Hunter</h3>
								<span className='block text-xs font-normal'>09033356787</span>
							</div>
						</div>
					</div>
					<div className='py-10'>
						
					</div>
				</ul>
			</div>
		</>
	);
};

export default Header;

/*


 */
