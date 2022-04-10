import { useRouter } from 'next/router';
import Link from 'next/link';
import { sidebar } from '../../data';

const Sidebar = () => {
	const router = useRouter();

	return (
		<div className='proSide '>
			<div className='flex-col flex-shrink hidden w-full bg-white border shadow-2xl h-2/3 lg:flex'>
				<ul className='flex flex-col w-full py-10 '>
					<div className='flex'>
						<li>
							{sidebar.map((item, index) => {
								return (
									<Link key={index} href={item.path}>
										<a
											className={`flex items-center hover:text-[#009e7f] py-[20px] px-[50px] ${
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

				<div className='flex flex-col w-full py-10 bg-gray-100 mt-11'>
					<a className='text-left text-gray-800 border-none cursor-pointer py-[20px] px-[50px]'>
						Logout
					</a>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
