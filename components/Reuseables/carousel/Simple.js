import Carousel from 'react-multi-carousel';
import React from 'react';

const responsive = {
	desktop: {
		breakpoint: {max: 3000, min: 1024},
		items: 1,
		paritialVisibilityGutter: 60,
	},
	tablet: {
		breakpoint: {max: 1024, min: 464},
		items: 1,
		paritialVisibilityGutter: 50,
	},
	mobile: {
		breakpoint: {max: 464, min: 0},
		items: 1,
		paritialVisibilityGutter: 30,
	},
};
// const images = [
// 	'/Fruit-2.jpg',
// 	'/Fruit-2.jpg',
// 	'/Fruit-2.jpg',
// 	'/Fruit-2.jpg',
// ];

const CustomDot = ({index, onClick, active, images}) => {
	return (
		<li
			data-index={index}
			key={index}
			onClick={() => onClick()}
			className={`dot ${active && 'active'}`}>
			{
				React.Children.toArray(
					images.map((item, index) => (
						<img
							src={item}
							key={index}
							alt=''
							style={{
								width: '100%',
								height: '100%',
								position: 'relative',
							}}
						/>
					))
				)[index]
			}
		</li>
	);
};

const Simple = ({deviceType, images}) => {
	return (
		<Carousel
			showDots
			ssr
			infinite={true}
			slidesToSlide={1}
			containerClass='custom'
			responsive={responsive}
			deviceType={deviceType}
			autoPlay={false}
			arrows={false}
			customDot={<CustomDot images={images} />}>
			{images.slice(0, 5).map((image, index) => {
				return (
					<div key={index} style={{position: 'relative'}}>
						<img
							draggable={false}
							alt='text'
							style={{
								minWidth: 'auto',
								height: 'auto',
								position: 'relative',
								margin: 'auto',
							}}
							className='product-image'
							src={image}
						/>
					</div>
				);
			})}
		</Carousel>
	);
};

export default Simple;
