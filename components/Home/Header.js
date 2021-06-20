import React from 'react';
import Image from 'next/image';
import {SearchIcon} from '@heroicons/react/outline';
import {QuestionMarkCircleIcon} from '@heroicons/react/solid';
import {useState} from 'react';
import Link from 'next/link';

const Header = () => {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};
	return (
		<>
			<nav className='flex items-center flex-wrap p-3 sticky top-0 bg-white border-b z-20 shadow container'>
				<a className='inline-flex items-center p-2 sm:ml-24 ml-4'>
					<Image
						src='/download.svg'
						width={120}
						height={40}
						className='cursor-pointer'
					/>
				</a>
				<button
					className=' inline-flex p-3 rounded lg:hidden text-black ml-auto hover:text-black outline-none'
					onClick={handleClick}>
					<svg
						className='w-6 h-6 '
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>
				</button>
				<form className='hidden bg-gray-100 lg:flex flex-grow px-6 py-3 ml-36 border border-gray-200 rounded max-w-3xl items-center'>
					<SearchIcon className='h-6 hidden sm:inline-flex' />
					<input
						className='flex-grow w-full focus:outline-none bg-gray-100 '
						type='text'
						placeholder='Search Your Product from here'
					/>
				</form>
				<div
					className={`${
						active ? '' : 'hidden'
					}   w-full lg:inline-flex lg:flex-grow lg:w-auto mr-10`}>
					<div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
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
			</nav>
		</>
	);
};

export default Header;
