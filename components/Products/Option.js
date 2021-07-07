import Related from './Related';

const Option = () => {
	return (
		<div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 mt-20'>
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
