import ImageData from './ImageData';

const Dot = (props) => {
	return (
		<ul className='absolute bottom-0 flex justify-center left-0 top-60 text-center'>
			<li className=' border border-gray-200 mr-5 w-20 h-auto overflow-hidden'>
				{ImageData.map((slide, index) => (
					<img
						src={slide.url}
						alt=''
						key={index}
						onClick={(event) =>
							props.onClick((event.target.value = index))
						}
						className={`${
							props.activeIndex === index ? 'dot active' : 'dot'
						}`}
					/>
				))}
			</li>
		</ul>
	);
};

export default Dot;
