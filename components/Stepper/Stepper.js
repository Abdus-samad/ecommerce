import React, {useState, useEffect, useRef} from 'react';
import {CheckIcon} from '@heroicons/react/solid';

const Stepper = ({steps, currentStepNumber}) => {
	const [stepperSteps, setStep] = useState([]);
	const stepsStateRef = useRef();

	useEffect(() => {
		const stepsState = steps.map((step, index) => {
			const stepObj = {};
			stepObj.description = step;
			stepObj.completed = false;
			stepObj.highlighted = index === 0 ? true : false;
			stepObj.selected = index === 0 ? true : false;
			return stepObj;
		});

		stepsStateRef.current = stepsState;

		const currentSteps = updateStep(currentStepNumber - 1, stepsState);
		setStep(currentSteps);
	}, []);

	useEffect(() => {
		const currentSteps = updateStep(
			currentStepNumber - 1,
			stepsStateRef.current
		);
		setStep(currentSteps);
	}, [currentStepNumber]);

	function updateStep(stepNumber, steps) {
		const newSteps = [...steps];

		let stepCounter = 0;
		while (stepCounter < newSteps.length) {
			//current step
			if (stepCounter === stepNumber) {
				newSteps[stepCounter] = {
					...newSteps[stepCounter],
					selected: true,
					completed: false,
				};
				stepCounter++;
			}
			// Past step
			else if (stepCounter < stepNumber) {
				newSteps[stepCounter] = {
					...newSteps[stepCounter],
					selected: true,
					completed: true,
				};
				stepCounter++;
			}
			// Future steps
			else {
				newSteps[stepCounter] = {
					...newSteps[stepCounter],
					selected: false,
					completed: false,
				};
				stepCounter++;
			}
		}
		return newSteps;
	}

	const stepsDisplay = stepperSteps.map((step, index) => {
		return (
			<div
				key={index}
				className={
					index !== stepperSteps.length - 1 ? 'Block' : 'Block'
				}>
				<div className='Circle'>
					<div
						className={
							step.selected === step ? 'circle active' : 'circle'
						}>
						{step.completed ? (
							<span className='text-white font-bold text-xl'>
								<CheckIcon className='h-5' />
							</span>
						) : (
							index + 1
						)}
						<div className='progressBar'></div>
					</div>
					<div className='absolute top-0 font-bold text-[15px]  text-center mt-[50px] w-32 text-xs '>
						{' '}
						{step.description}{' '}
					</div>
				</div>
			</div>
		);
	});

	return (
		<div className='w-full flex py-[30px] px-[25px] border-b border-[#f1f1f1}'>
			{stepsDisplay}
		</div>
	);
};

export default Stepper;
