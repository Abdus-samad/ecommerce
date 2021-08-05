import React, {useState} from 'react';
import Stepper from './Stepper';

const ProgressBar = (props) => {


	return (
		<>
			<Stepper stepArray={props.stepArray} currentStep={props.currentStep} />
		</>
	);
};

export default ProgressBar;
