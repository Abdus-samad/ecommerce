import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../../firebase';
import AuthContext from '../../context/Auth/authContext';
import { popup } from '../../data';
import { UserCircleIcon } from '@heroicons/react/solid';

const HeaderOp = () => {
	const authContext = useContext(AuthContext);
	const { user } = authContext;

	const router = useRouter();
	const [show, setShow] = useState(false);

	const dropDown = () => {
		setShow(!show);
	};

	const handleAuth = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<div className='relative ml-3'>
			<div className='block w-10 h-10 overflow-hidden cursor-pointer'>
				<UserCircleIcon
					onClick={dropDown}
					className='block w-full h-auto text-gray-500'
					src={user.photoURL}
				/>
			</div>

			{show && (
				<div className='Popover pop'>
					<div>
						{popup.map((item, index) => {
							return (
								<div key={index}>
									<a
										style={{
											display: 'flex',
											alignItems: ' center',
										}}
										href={item.path}
										className={`Item ${
											router.asPath === item.path
												? 'text-green-800'
												: 'text-gray-800'
										}`}
										role='menuitem'>
										<span>{item.title}</span>
									</a>
								</div>
							);
						})}
					</div>

					<a
						onClick={handleAuth}
						style={{
							display: 'flex',
							alignItems: ' center',
						}}
						className='Item'
						role='menuitem'>
						<span>Logout</span>
					</a>
				</div>
			)}
		</div>
	);
};

export default HeaderOp;