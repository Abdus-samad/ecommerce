import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const ImageSlider = () => {
	return (
		<CarouselProvider
			naturalSlideWidth={100}
			naturalSlideHeight={125}
			totalSlides={2}
			className='slider'>
			<Slider>
				<Slide index={0}>
					<Image src='/Hero_one.jpg' width={1500} height={350} />
				</Slide>
				<Slide index={1}>
					{' '}
					<Image src='/Hero-Two.jpg' width={1500} height={350} />
				</Slide>
			</Slider>
			<ButtonNext className='right bg-white flex h-9 w-9 items-center justify-center shadow rounded-full border-none'>
				<ChevronRightIcon className='h-5 text-lg' />
			</ButtonNext>
			<ButtonBack className='left bg-white flex h-9 w-9 items-center justify-center shadow rounded-full border-none'>
				<ChevronLeftIcon className='h-5' />
				</ButtonBack>
		</CarouselProvider>
	);
};

export default ImageSlider;
