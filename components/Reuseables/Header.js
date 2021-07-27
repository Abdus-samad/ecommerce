import {MenuIcon} from '@heroicons/react/outline';
import {useContext, useEffect} from 'react';
import Image from 'next/image';
import {QuestionMarkCircleIcon} from '@heroicons/react/solid';
import Link from 'next/link';
import AuthContext from '../../context/Auth/authContext';
import {auth} from '../../firebase';
import HeaderOp from './HeaderOp';

const Header = (props) => {
	const authContext = useContext(AuthContext);
	const {user, getUser} = authContext;

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			getUser(authUser);
			console.log(authUser);
		});
	}, []);
	return (
		<>
			<div className='flex items-center flex-wrap p-3 sticky top-0 bg-white border-b z-20 shadow'>
				<a className='ml-8 z-10 lg:hidden'>
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
					{!!user ? (
						<HeaderOp />
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
