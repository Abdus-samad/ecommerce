import SData from './SData';
import {useRouter} from 'next/router';

const Sidebar = () => {
	const router = useRouter();

	return (
		<div>
			<div className='wi flex-shrink mr-7'>
				<div className='w-full h-auto lg:flex flex-col flex-shrink bg-white border shadow-2xl'>
					<ul className='flex flex-col w-full py-10'>
						<div className='flex'>
							<li>
								{SData.map((item, index) => {
									return (
										<a
											key={index}
											href={item.path}
											className={`flex items-center hover:text-green-800 tb  ${
												router.asPath === item.path
													? 'text-green-800 border-l-4 border-green-800'
													: 'text-gray-800'
											}`}>
											<span>{item.title}</span>
										</a>
									);
								})}
							</li>
						</div>
					</ul>

					<div className='flex flex-col w-full py-10 bg-gray-100'>
						<a className='border-none text-left cursor-pointer text-gray-800 tb'>
							Logout
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;