import { XIcon } from '@heroicons/react/solid';

const Modal = ({ open, close }) => {
	if (!open) return null;

	return (
		<div style={{ overflow: 'hidden' }}>
			<div
				className='h-full w-full bg-[#0b0b0b] fixed top-0 left-0 z-[1042] overflow-hidden opacity-[0.8]'
				onClick={close}
			/>
			<button onClick={close} className='Close'>
				<XIcon className='w-8 h-8' />
			</button>
			<div className='top-0 left-0 w-full h-full z-[1042] overflow-hidden fixed'>
				<div className='top-0 left-0 w-full h-full z-[1042] overflow-hidden fixed'>
					<div className='max-w-full mx-auto z-[1045] align-middle relative'>
						<div className='absolute w-full lg:w-[400px] h-auto bg-primary-100 mt-[200px] p-[30px] lg:left-[40%] transition-all duration-500 ease-in-out'>
							<form>
								<h2 className='mb-4 text-xl font-bold text-gray-800'>
									Edit Contact
								</h2>
								<div className='flex flex-col w-full mb-4'>
									<input
										type='text'
										className='w-full h-[54px] rounded-[6px] border border-primary-primary text-gray-900 font-normal text-base px-[18px] focus:outline-none'
									/>
								</div>
								<div className='flex flex-col w-full mb-4'>
									<textarea className='w-full rounded-[6px] border border-primary-primary text-gray-900 font-normal text-base px-[18px] focus:outline-none h-auto min-h-[171px] pt-[15px] resize-none'></textarea>
								</div>
								<button
									style={{ width: '100%', height: '44px' }}
									className='ModalBtn'>
									Save Contact
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;

/* 


*/
