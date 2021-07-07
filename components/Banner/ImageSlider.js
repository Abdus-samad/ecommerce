import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import SwiperCore, {Navigation} from 'swiper/core';
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/outline';

// install Swiper modules
SwiperCore.use([Navigation]);

export default function App() {
	return (
		<>
			<Swiper
      slidesPerView={1}
				navigation={{
					nextEl: '.next',
					prevEl: '.prev',
				}}
				loop={true}
				style={{marginBottom: '25px', minHeight: '180px'}}>
				<SwiperSlide>
					<div className='Image'>
						<img src='/Hero_one.jpg' alt='' className='img'/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
          <div className='Image'>
            <img src='/Hero-Two.jpg' alt="" className='img'/>
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
