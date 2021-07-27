import {useState, useEffect} from 'react';
import data from './deliverlydata';

const Delivery = () => {
	const [current, setCurrent] = useState(false);

	useEffect(() => {
		setCurrent(data[0]);
	}, []);
	return (
		<div className='bg-white pt-[30px] px-[30px] pb-[30px] mb-5 shadow'>
			<h3 className='text-xl font-normal text-[#0d1136] mb-[35px] flex items-center iD'>
				Delivery Schedule
			</h3>
			<div className='justify-between flex flex-wrap'>
				{data.map((item, index) => (
					<label
						onClick={() => setCurrent(item)}
						key={index}
						className={
						 current === item
								? 'del dlabel active'
								: 'dlabel del'
						}>
						<span className='text-[13px] font-medium text-[#0d1136] mb-[5px]'>
							{item.time}
						</span>
						<span className='text-base font-normal text-[#424561]'>
							{item.duration}
						</span>
					</label>
				))}
			</div>
		</div>
	);
};

export default Delivery;
