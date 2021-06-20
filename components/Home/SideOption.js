import { EmojiHappyIcon } from '@heroicons/react/outline';
const SideOption = ({Name}) => {
	return (
		<div>
			<div className='card m-2 p-3 cursor-pointer border border-gray-100 bg-white rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200'>
				<div className='m-3 flex flex-col items-center'>
					<EmojiHappyIcon className='mb-3 h-5 w-10' />
					<p className='font-light font-mono text-sm text-gray-70 break-words hover:text-gray-900 transition-all duration-200'>
						{Name}
					</p>
				</div>
			</div>
		</div>
	);
};

export default SideOption;
