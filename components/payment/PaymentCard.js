import {XIcon} from '@heroicons/react/outline';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import SwiperCore, {Navigation} from 'swiper/core';
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/outline';

SwiperCore.use([Navigation]);

const PaymentCard = () => {
	return (
		<>
			<Swiper
				slidesPerView={3}
				navigation={{
					nextEl: '.next',
					prevEl: '.prev',
				}}
				loop={true}>
				<SwiperSlide>
					<label className='cursor-pointer relative flex px-3 w-full nb'>
						<span className='flex w-full flex-col relative bg-blue-200 py-4 px-5 rounded-md border border-blue-200'>
							<span className='mb-4 block'>
								<img
									src='/master-card.png'
									className='max-w-full h-3 block'
								/>
							</span>
							<span className='text-sm font-normal text-gray-500 mb-2'>
								Card Number
							</span>
							<span className='spand'>
								<span className='span'>****</span>
								<span className='span'>****</span>
								<span className='span'>****</span>
								<span className='text-sm span'>3625</span>
							</span>
							<span className='text-sm font-bold text-gray-900 block'>
								Sara Smith
							</span>
						</span>
						<span className='delete btn'>
							<XIcon className='h-4' />
						</span>
					</label>
				</SwiperSlide>
				<SwiperSlide>
					<label className='cursor-pointer relative flex px-3 w-full nb'>
						<span className='flex w-full flex-col relative bg-blue-200 py-4 px-5 rounded-md border border-blue-200'>
							<span className='mb-4 block'>
								<img
									src='/paypal.png'
									className='max-w-full h-3 block'
								/>
							</span>
							<span className='text-sm font-normal text-gray-500 mb-2'>
								Card Number
							</span>
							<span className='spand'>
								<span className='span'>****</span>
								<span className='span'>****</span>
								<span className='span'>****</span>
								<span className='text-sm span'>0786</span>
							</span>
							<span className='text-sm font-bold text-gray-900 block'>
								Alex Hunter
							</span>
						</span>
						<span className='delete btn'>
							<XIcon className='h-4' />
						</span>
					</label>
				</SwiperSlide>
				<SwiperSlide>
					<label className='cursor-pointer relative flex px-3 w-full nb'>
						<span className='flex w-full flex-col relative bg-blue-200 py-4 px-5 rounded-md border border-blue-200'>
							<span className='mb-4 block'>
								<img
									src='/visa.png'
									className='max-w-full h-3 block'
								/>
							</span>
							<span className='text-sm font-normal text-gray-500 mb-2'>
								Card Number
							</span>
							<span className='spand'>
								<span className='span'>****</span>
								<span className='span'>****</span>
								<span className='span'>****</span>
								<span className='text-sm span'>2646</span>
							</span>
							<span className='text-sm font-bold text-gray-900 block'>
								John Doe
							</span>
						</span>
						<span className='delete btn'>
							<XIcon className='h-4' />
						</span>
					</label>
				</SwiperSlide>
				<button className='Nav next'>
					<ChevronRightIcon className='h-5' />
				</button>
				<button className='Nav prev'>
					<ChevronLeftIcon className='h-5' />
				</button>
			</Swiper>
		</>
	);
};

export default PaymentCard;
