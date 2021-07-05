import Data from './sideOption'

const Side = () => {
	return (
		<div>
			<div className='lg:grid hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3'>
				{Data.map((item, index) => {
					return (
						<div key={index} className='bg-white text-center py-4 px-2 rounded cursor-pointer border-2 border-white'>
							<div className='flex justify-center items-center h-20 py-3 px-5 box-border'>
								{item.icon}
							</div>
							<p className='font-semibold text-sm text-gray-700'>
								{item.Tag}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Side;
