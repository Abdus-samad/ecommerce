import SData from '../Profile/SData';
import {useRouter} from 'next/router';
import Link from 'next/link';

const Sidebar = () => {
	const router = useRouter();

	return (
		<div className='proSide '>
			<div className='w-full h-auto lg:flex hidden flex-col flex-shrink bg-white border shadow-2xl'>
				<ul className='flex flex-col w-full py-10'>
					<div className='flex'>
						<li>
							{SData.map((item, index) => {
								return (
									<Link key={index} href={item.path}>
										<a
											className={`flex items-center hover:text-[#009e7f] proLog ${
												router.asPath === item.path
													? 'text-[#009e7f] border-l-4 border-[#009e7f]'
													: 'text-gray-800'
											}`}>
											<span>{item.title}</span>
										</a>
									</Link>
								);
							})}
						</li>
					</div>
				</ul>

				<div className='flex flex-col w-full py-10 bg-gray-100'>
					<a className='border-none text-left cursor-pointer text-gray-800 proLog'>
						Logout
					</a>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
