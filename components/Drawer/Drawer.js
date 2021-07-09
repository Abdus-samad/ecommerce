import { XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import Data from './data';

const Drawer = (props) => {
	const router = useRouter();

	return (
		<div className={ props.drawer ? 'menu active' : 'menu'}>
			<ul className='w-full max-h-full overflow-y-scroll'>
				<li className='w-full h-20 flex justify-start items-center'>
					<a className='ml-8'>
						<XIcon className='h-5' onClick={props.showDrawer} />
					</a>
				</li>
				<div className='bg-gray-100 p-11'>
					<div className='flex items-center '>
						<div className='w-12 h-12 flex-shrink block overflow-hidden mr-4 rounded-3xl'>
							<Image
								src='/.jpg'
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
										<span className=''>{item.title}</span>
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
	);
};

export default Drawer;
