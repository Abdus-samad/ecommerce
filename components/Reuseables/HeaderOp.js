import React, {useContext, useState} from 'react';
import Data from './Data';
import {useRouter} from 'next/router';
import { auth } from '../../firebase';
import AuthContext from '../../context/Auth/authContext'


const HeaderOp = () => {

	const authContext = useContext(AuthContext);
	const { user } = authContext;

	const router = useRouter();
	const [show, setShow] = useState(false);

	const dropDown = () => {
		setShow(!show);
	};


	const handleAuth = () =>{
		if(user) {
		  auth.signOut()
		}
	   }

	return (
		<div className='ml-3 relative'>
			<div className='PopImg'>
				<img
					onClick={dropDown}
					className='w-full h-auto block'
					src='/use.jpeg'
					alt
				/>
			</div>

			{show && (
				<div className='Popover pop'>
					<div>
						{Data.map((item, index) => {
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
