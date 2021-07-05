import ImageData from './ImageData';
import CarouselContent from './CarouselContent';
import Dot from './Dot';
import {useState} from 'react';

const len = ImageData.length - 1;

const Carousel = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<>
				<CarouselContent activeIndex={activeIndex} />
				<Dot
					activeIndex={activeIndex}
					onClick={(activeIndex) => setActiveIndex(activeIndex)}
				/>
		</>
	);
};

export default Carousel;
