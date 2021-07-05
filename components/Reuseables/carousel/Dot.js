import ImageData from './ImageData';

const Dot = (props) => {
	return (
		<ul
			
			className='absolute bottom-0 cursor-pointer flex justify-center right-0 left-0 flex-row text-center'>
			{ImageData.map((slide, index) => (
				<li
					key={index}
					className={`${
						props.activeIndex === index ? 'dot active' : 'dot'
					}`}
					onClick={(event) =>
						props.onClick((event.target.value = index))
					}>
					<img src={slide.url} alt='' />
				</li>
			))}
		</ul>
	);
};

export default Dot;
