import React from 'react';
import MasterCard from './image/mastercard.png';
import Paypal from './image/paypal.png';
import Visa from './image/visa.png';

const Card = ({name, cardType, lastFourDigit}) => {
	const logo =
		(cardType === 'paypal' && Paypal) ||
		(cardType === 'master' && MasterCard) ||
		(cardType === 'visa' && Visa);

	return (
		<>
			<span className='flex w-full flex-col relative bg-blue-200 py-4 px-5 rounded-md border border-blue-200'>
				<span className='mb-4 block'>
					<img src={logo} alt='' className='max-w-full h-3 block' />
				</span>
				<span className='text-base font-normal text-gray-300 mb-2'>
					Card Number
				</span>
				<span>
					<span className='span'>****</span>
					<span className='span'>****</span>
					<span className='span'>****</span>
					<span className='text-sm span'>3625</span>
				</span>
				<span className='text-sm font-bold text-gray-900 block'>
					Ajao Abdus-samad
				</span>
			</span>
      <span className='flex w-full flex-col relative bg-blue-200 py-4 px-5 rounded-md border border-blue-200'>
				<span className='mb-4 block'>
					<img src={logo} alt='' className='max-w-full h-3 block' />
				</span>
				<span className='text-base font-normal text-gray-300 mb-2'>
					Card Number
				</span>
				<span>
					<span className='span'>****</span>
					<span className='span'>****</span>
					<span className='span'>****</span>
					<span className='text-sm span'>9880</span>
				</span>
				<span className='text-sm font-bold text-gray-900 block'>
					Jhon Doe
				</span>
			</span>
      	<span className='flex w-full flex-col relative bg-blue-200 py-4 px-5 rounded-md border border-blue-200'>
				<span className='mb-4 block'>
					<img src={logo} alt='' className='max-w-full h-3 block' />
				</span>
				<span className='text-base font-normal text-gray-300 mb-2'>
					Card Number
				</span>
				<span>
					<span className='span'>****</span>
					<span className='span'>****</span>
					<span className='span'>****</span>
					<span className='text-sm span'>6437</span>
				</span>
				<span className='text-sm font-bold text-gray-900 block'>
					Sara smith
				</span>
			</span>
		</>
	);
};

export default Card;
