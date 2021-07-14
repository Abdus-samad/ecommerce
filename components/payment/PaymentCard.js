import React from 'react';
import Card from './card';
import {XIcon} from '@heroicons/react/solid';

const PaymentCard = ({}) => {
	return (
		<label className='cursor-pointer relative flex px-3 w-full nb'>
			<Card />

			<button className='btn wrap'>
				<XIcon />
			</button>
		</label>
	);
};

export default PaymentCard;
