import {useState} from 'react';
import {MinusIcon, PlusIcon} from '@heroicons/react/outline';
import Image from 'next/image';

const ProductOption = ({image, price, name}) => {
	const [color, setColor] = useState('bg-gray-100');
	const [minus, setMinus] = useState('hidden');
	const [add, setAdd] = useState('bg-gray-200');
	return (
		<div className='flex flex-col flex-grow card p-8 cursor-pointer border border-gray-100 bg-white rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200'>
			<div className='relative flex items-center justify-center overflow-hidden flex-grow'>
				<Image
					src={image}
					width={300}
					height={200}
					className='max-w-full max-h-full'
				/>
			</div>
			<div className='box-border min-w-0 m-0 px-5 pb-5'>
				<div className='flex items-center mb-3'>
					<span className='text-black text-sm leading-none'>
						${price}
					</span>
				</div>
				<h2 className='mb-8 text-black text-sm font-normal'>{name}</h2>
				<div
					className={`flex ${color} hover:bg-green-500 hover:text-white cursor-pointer h-9 w-full rounded text-black font-bold justify-between items-center overflow-hidden flex-shirnk`}>
					<a
						onClick={() => {
							setColor('bg-gray-300');
							setMinus('hidden');
							setAdd('bg-gray-400');
						}}
						className='border-none text-black flex items-center justify-center h-full p-2'>
						<MinusIcon className={`${minus} h-5`} />
					</a>
					<span>Add</span>
					<a
						onClick={() => {
							setColor('bg-green-500');
							setMinus('block');
							setAdd('bg-green-600');
						}}
						className={`border-none hover:text text-black ${add} hover:bg-green-700 flex items-center jusify-center h-full p-2`}>
						<PlusIcon className='h-5' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProductOption;
