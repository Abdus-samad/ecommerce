import {PlusIcon} from '@heroicons/react/solid';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import SwiperCore, {Pagination} from 'swiper/core';
import PaymentCard from './PaymentCard';

SwiperCore.use([Pagination]);

const Payment = () => {
	return (
		<div className='mb-10 box-border -mx-2 flex-initial flex-wrap flex-row'>
			<div className='box-boder flex-4 px-2 dp relative'>
				<h3 className='text-base mb-6 flex items-center text-gray-800 font-semibold'>
					Payment Option
				</h3>
				<header className='flex justify-between items-center -mt-4'>
					<span className='text-sm font-bold text-green-600 block'>
						Saved Cards
					</span>
					<a className='text-sm font-bold text-green-600 h-10 card'>
						<span className='mr-2'>
							<PlusIcon className='h-4' />{' '}
						</span>
						Add Cards
					</a>
				</header>
				<div className='mt-4 -mx-3 relative'>
					<PaymentCard />
				</div>
			</div>
		</div>
	);
};

export default Payment;
