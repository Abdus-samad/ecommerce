import {MenuIcon} from '@heroicons/react/outline';
import {XIcon} from '@heroicons/react/solid';
import {useState} from 'react';
import Data from '../Sidebar/data';
import Image from 'next/image';
import {QuestionMarkCircleIcon} from '@heroicons/react/solid';
import Link from 'next/link';
import {useRouter} from 'next/router';

const Header = () => {
	const router = useRouter();
	const [drawer, setDrawer] = useState(false);

	const showDrawer = () => setDrawer(!drawer);

	return (
		<>
			<div className='flex items-center flex-wrap p-3 sticky top-0 bg-white border-b z-20 shadow'>
				<a className='ml-8 z-10 lg:hidden'>
					<MenuIcon className='h-6' onClick={showDrawer} />
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

				<div className='hidden lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start lg:h-auto'>
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
					<a href='/login'>
						<a
							style={{width: '100%'}}
							className='px-8 text-sm tr flex-shrink-0 text-center h-10 cursor-pointer text-white bg-green-600 hover:bg-green-700 rounded-md flex items-center justify-center'>
							Join
						</a>
					</a>
				</div>
			</div>
			<div className={drawer ? 'menu active' : 'menu'}>
				<ul className='w-full max-h-full overflow-y-scroll'>
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
								<h3 className='text-sm font-bold mb-2 text-gray-800'>
									Alex Hunter
								</h3>
								<span className='block text-xs font-normal'>
									09033356787
								</span>
							</div>
						</div>
					</div>
					<div className='py-10'>
						<div>
							{Data.map((item, index) => {
								return (
									<li key={index}>
										<a
											href={item.path}
											className={`block pf font-normal relative mb-5 cursor-pointer ${
												router.asPath === item.path
													? 'text-green-800 border-l-4 border-green-800'
													: 'text-gray-800'
											}`}
											style={{
												display: 'flex',
												alignItems: 'center',
											}}>
											<span className=''>
												{item.title}
											</span>
										</a>
									</li>
								);
							})}
						</div>
					</div>
					<div className='py-11 border-t'>
						<div>
							<span className='block font-normal text-gray-800 relative pf'>
								Logout
							</span>
						</div>
					</div>
				</ul>
			</div>
		</>
	);
};

export default Header;

/*
display: block;
    padding: 5px 45px;
    font-weight: 400;
    color: rgb(13, 17, 54);
    margin-bottom: 19px;
    position: relative;
    transition: all 0.15s ease-in-out 0s;
    

   
 */
