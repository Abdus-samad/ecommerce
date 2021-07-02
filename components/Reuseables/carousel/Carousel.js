import ImageData from './ImageData';
import CarouselContent from './CarouselContent';
import Dot from './Dot';
import {useState} from 'react';

const len = ImageData.length - 1;

const Carousel = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<>
			<div>
				<CarouselContent activeIndex={activeIndex} />
			</div>
			<div className='absolute bottom-0 flex justify-center left-0 top-60 text-center'>
				<Dot
					activeIndex={activeIndex}
					onClick={(activeIndex) => setActiveIndex(activeIndex)}
				/>
			</div>
		</>
	);
};

export default Carousel;
