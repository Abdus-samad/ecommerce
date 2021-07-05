import Related from './Related';

const Option = () => {
	return (
		<div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-2'>
			<Related
				id='12344'
				image='/Salmon.jpg'
				name='Salmon fish'
				price='234.56'
				count='1'
			/>
			<Related
				id='5656'
				image='/codfillet.jpg'
				name='Cidfillet'
				price='455'
				count='1'
			/>
			<Related
				id='12344'
				image='/Salmon.jpg'
				name='Salmon fish'
				price='234.56'
				count='1'
			/>
			<Related
				id='12344'
				image='/Salmon.jpg'
				name='Salmon fish'
				price='234.56'
				count='1'
			/>
		</div>
	);
};

export default Option;
