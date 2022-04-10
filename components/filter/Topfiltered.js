import { useRouter } from 'next/router';

const Topfiltered = (props) => {
	const { query } = useRouter();
	return (
		<div className='sticky top-0 flex items-center justify-between w-full px-5 pt-4 pb-4 bg-white border-t lg:hidden'>
			<div className='flex items-baseline w-full'>
				{query.category ? (
					<span className='px-3 py-1 text-sm font-bold text-gray-800 bg-gray-100 rounded'>
						{query.category}
					</span>
				) : (
					<span className='text-base font-bold text-gray-800'>
						No Category Selected
					</span>
				)}
			</div>
			<a
				onClick={props.showDrawer}
				className='flex items-center justify-center flex-shrink-0 text-base font-bold text-center text-green-600 transition-all duration-200 rounded cursor-pointer'>
				Filter
			</a>
		</div>
	);
};

export default Topfiltered;
