import ImageData from './ImageData';

const CarouselContent = (props) => {
	return (
		<ul
			className='flex-row flex'
		>
			{ImageData.map((slide, index) => (
				<li
					key={index}
					className={
						index === props.activeIndex ? 'slide active' : 'slide'
					}>
					<img
						src={slide.url}
						alt=''
						className='block max max-w-full'
						style={{
							minWidth: 'auto',
							height: 'auto',
							position: ' relative',
							margin: 'auto',
						}}
					/>
				</li>
			))}
		</ul>
	);
};

export default CarouselContent;
