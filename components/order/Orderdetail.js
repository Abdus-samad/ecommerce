import {useEffect, useState} from 'react';
import {detail} from './data';

const Orderdetail = (props) => {
	const [current, setCurrent] = useState(false);

	const handleClick = (clickType) => {
		let newStep = props.currentStep;
		clickType == 'next' ? newStep++ : newStep--;

		if (newStep > 0 === newStep <= props.stepArray.length) {
			props.setCurrentStep(newStep);
		}
	};

	useEffect(() => {
		setCurrent(detail[0]);
	}, []);

	return (
		<div
			style={{height: '679px'}}
			className='w-[330px] h-auto flex flex-col border border-[#f1f1f1] flex-shrink-0 mr-[30px] overflow-hidden'>
			<h3
				style={{
					padding: '0px 20px',
				}}
				className='text-[#0d1136] text-[21px] font-semibold my-[25px] font-pop'>
				My Order
			</h3>
			<div className='h-full min-h-[420px] overflow-auto scrollbar mr-3'>
				<div className='w-full px-[20px] pb-[20px]'>
					{detail.map((item, index) => (
						<div
							key={index}
							onClick={() => {
								setCurrent(item);
								handleClick('next');
							}}
							className={
								current === item
									? 'OrderContainer active'
									: 'OrderContainer'
							}>
							<div className='py-[15px] px-[20px] flex justify-between items-center border-b border-[#f1f1f1]'>
								<span className='font-bold text-[15px] text-[#0d1136]'>
									{item.title}
									<span className='font-normal'>
										#{item.numb}
									</span>
								</span>
								<span className='bg-[#2e70fa1a] text-[#2e70fa] font-normal p-[10px] rounded-[6px] text-[13px]'>
									{item.type}
								</span>
							</div>
							<div className='flex flex-col p-[20px]'>
								<div className='text-[13px] font-normal text-[#0d1136] flex justify-between items-center w-full mb-[15px] last:font-bold last;mb-0'>
									{item.name} :<span>{item.other}</span>
								</div>
								<div className='text-[13px] font-normal text-[#0d1136] flex justify-between items-center w-full mb-[15px] last:font-bold last;mb-0'>
									{item.time} :<span>{item.date}</span>
								</div>
								<div className='text-[13px] font-normal text-[#0d1136] flex justify-between items-center w-full mb-[15px] last:font-bold last;mb-0'>
									{item.total} :<span> ${item.price}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Orderdetail;

/*


    font-size: 13px;
    font-weight: 400;
    color: rgb(13, 17, 54);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    margin-bottom: 15px;



*/
