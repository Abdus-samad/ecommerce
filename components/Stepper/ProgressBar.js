import React, {useState} from 'react';
import Stepper from './Stepper';

const ProgressBar = () => {
	const [currentStep, setCurrentStep] = useState(1);

	const stepArray = ['Order Received', 'Order On The Way', 'Order Delivered'];

	const handleClick = (clickType) => {
		let newStep = currentStep;
		clickType == 'next' ? newStep++ : newStep--;

		// Check if steps are within the boundary
		if (newStep > 0 === newStep <= stepArray.length) {
			setCurrentStep(newStep);
		}
	};

	return (
		<>
			<Stepper steps={stepArray} currentStepNumber={currentStep} />

			{/* <div className='container flex justify-around my-8 '>
				<button
					onClick={() => handleClick('next')}
					className='btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-orange-700 hover:bg-orange-700 text-orange-700 hover:text-white font-normal py-2 px-4 rounded'>
					{' '}
					Next{' '}
				</button>
			</div> */}
		</>
	);
};

export default ProgressBar;
