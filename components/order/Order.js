import {total} from './data';
import Table from './Table';
import ProgressBar from '../Stepper/ProgressBar';

const Order = (props) => {
	return (
		<div className='minh w-full flex flex-col border border-[#f1f1f1]'>
			<h3
				style={{
					padding: '0px 20px',
				}}
				className='text-[#0d1136] text-[21px] font-semibold my-[25px] font-pop'>
				Order Details
			</h3>
			<div className='w-full flex border-t border-[#f1f1f1] border-b'>
				<div className='border-r border-[#f1f1f1] p-[20px] flex flex-col'>
					<h3 className='text-[#0d1136] text-[15px] font-bold my-[10px] font-lato'>
						Delivery Address
					</h3>
					<span className='font-rob text-[15px] font-normal text-[#77798c] leading-6'>
						1756 Roy Alley, GIRARDVILLE, Pennsylvania
					</span>
				</div>
				<div className='w-[235px] flex flex-col flex-shrink-0 p-[20px]'>
					{total.map((item, index) => (
						<div 
						key={index}
						className='font-rob text-[15px] font-normal text-[#77798c] mb-[15px] w-full flex items-center justify-between last:font-bold last:text-[#0d1136] last:mb-0'>
							{item.name}
							<div className='text-[#0d1136]'>${item.total}</div>
						</div>
					))}
				</div>
			</div>
			<ProgressBar 
				currentStep={props.currentStep}
				setCurrentStep={props.setCurrentStep}
				stepArray={props.stepArray}/>
			<div>
				<Table />
			</div>
		</div>
	);
};

export default Order;
