import ImageData from './ImageData';

const CarouselContent = (props) => {
	return (
		<div
			className='flex-row flex'
		>
			{ImageData.map((slide, index) => (
				<div
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
				</div>
			))}
		</div>
	);
};

export default CarouselContent;
