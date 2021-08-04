import {CheckIcon} from '@heroicons/react/solid'


const Step = (props) => {
	return (
		<div className={ props.selected >= props.index + 1  ? ' selected' : 'Block'}>
			<div
				className='Circle'
				onClick={() => props.updateStep(props.index)}>
				<div className='circle'>
					{props.selected >= props.index + 1 ? (
						<span className='w-[13px] h-[17px]'>
							<CheckIcon />
						</span>
					) : (
						props.index + 1
					)}
				</div>
				<div className='progress' />
			</div>
			<div>
				<span>{props.label}</span>
			</div>
		</div>
	);
};

export default Step;
