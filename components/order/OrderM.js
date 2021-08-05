import {useState} from 'react';
import ProgressBar from '../Stepper/ProgressBar';
import {details, total} from './data';
import Table from './Table';

const OrderM = (props) => {
	const [clicked, setClicked] = useState(false);

	const toggle = (index) => {
		if (clicked === index) {
			return setClicked(null);
		}

		setClicked(index);
	};

	//
	return (
		<div className='w-full flex lg:hidden'>
			<div className='w-full p-[0px] px-[20px] pb-[20px] md:p-[0px]'>
				<div className='bg-transparent rounded-none border-none'>
					{details.map((item, index) => (
						<div
							key={index}
							onClick={() => toggle(index)}
							className={
								clicked === index ? 'orm active' : 'orm'
							}>
							<div className='p-[0px] outline-none flex items-center leading-5 text-[#666] cursor-pointer'>
								{clicked === index ? (
									<i className='arrowdown' />
								) : (
									<i className='arrow' />
								)}

								<div className='w-full'>
									<div className='py-[15px] px-[20px] justify-between flex items-center border-b border-[#f1f1f1]'>
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
											{item.name} :
											<span>{item.other}</span>
										</div>
										<div className='text-[13px] font-normal text-[#0d1136] flex justify-between items-center w-full mb-[15px] last:font-bold last;mb-0'>
											{item.time} :
											<span>{item.date}</span>
										</div>
										<div className='text-[13px] font-normal text-[#0d1136] flex justify-between items-center w-full mb-[15px] last:font-bold last;mb-0'>
											{item.total} :
											<span> ${item.price}</span>
										</div>
									</div>
								</div>
							</div>
							{clicked === index ? (
								<div className='p-[0px] overflow-hidden text-[#666] bg-white'>
									<div className='box-border p-[0px] m-0'>
										<div className='flex flex-col w-full'>
											<div className='w-full flex flex-col border-t border-[#f1f1f1] border-b'>
												<div className='border-b border-[#f1f1f1] p-[20px] flex flex-col'>
													<h3 className='text-[#0d1136] text-[15px] font-bold my-[10px] font-lato'>
														Delivery Address
													</h3>
													<span className='font-rob text-[15px] font-normal text-[#77798c] leading-6'>
														1756 Roy Alley,
														GIRARDVILLE,
														Pennsylvania
													</span>
												</div>
												<div className='w-full flex flex-col flex-shrink-0 p-[20px]'>
													{total.map(
														(item, index) => (
															<div
																key={index}
																className='font-rob text-[15px] font-normal text-[#77798c] mb-[15px] w-full flex items-center justify-between last:font-bold last:text-[#0d1136] last:mb-0'>
																{item.name}
																<div className='text-[#0d1136]'>
																	$
																	{item.total}
																</div>
															</div>
														)
													)}
												</div>
											</div>
										</div>
									</div>
									<ProgressBar
										currentStep={props.currentStep}
										setCurrentStep={props.setCurrentStep}
										stepArray={props.stepArray}
									/>
									<Table />
								</div>
							) : null}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default OrderM;
/* 
        display: flex;
    flex-direction: column;
    width: 100%;
}
*/
