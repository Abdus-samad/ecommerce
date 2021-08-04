import {useState} from 'react';
import {PlusIcon, MinusIcon} from '@heroicons/react/solid';
import data from './data';

const Accordion = () => {
	const [clicked, setClicked] = useState(false);

	const toggle = (index) => {
		if (clicked === index) {
			return setClicked(null);
		}

		setClicked(index);
	};

	return (
		<div className='border-0'>
			{data.map((item, index) => (
				<div
					key={index}
					className='mb-[10px] border border-[#f1f1f1] rounded bg-white overflow-hidden  transition-all duration-100 ease-out'>
					<div
						onClick={() => toggle(index)}
						className='flex items-center py-[23px] pr-[25px] pl-[30px] cursor-pointer focus:outline-none relative justify-between transition-all duration-100 ease-out'>
						<h3 className='my-0 text-base font-bold text-[#0d1136]'>
							{item.name}
						</h3>
						<span className='order-2 w-[22px] h-[22px] flex-shrink-0 text-[#0d1136] item-center justify-center'>
							{clicked === index ? <MinusIcon /> : <PlusIcon />}
						</span>
					</div>
					{clicked === index ? (
						<div className='overflow text-[#666]  bg-white transition-all duration-100 ease-out'>
							<div className='box-border mt-0 mb-0 px-[30px] pb-[23px] transition-all duration-100 ease-out'>
								<p className='text-base text-[#77798c] font-normal'>
									{item.content}
								</p>
							</div>
						</div>
					) : null}
				</div>
			))}
		</div>
	);
};

export default Accordion;
