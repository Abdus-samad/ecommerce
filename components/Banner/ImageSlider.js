import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Navigation, Autoplay } from 'swiper/core';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
SwiperCore.use([Navigation, Autoplay]);

export default function App() {
	return (
		<>
			<Swiper
				slidesPerView={1}
				autoplay={true}
				navigation={{
					nextEl: '.next',
					prevEl: '.prev',
				}}
				loop={true}
				style={{
					marginBottom: '25px',
					minHeight: '80px',
					display: 'flex',
				}}>
				<SwiperSlide className='transition-all duration-700 ease-in-out'>
					<div className='Image'>
						<img src='/Hero_one.jpg' alt='' className='img' />
					</div>
				</SwiperSlide>
				<SwiperSlide className='transition-all duration-700 ease-in-out'>
					<div className='Image'>
						<img src='/Hero-Two.jpg' alt='' className='img' />
					</div>
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
}
