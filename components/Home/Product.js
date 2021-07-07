import ProductOption from './ProductOption';
import PaginationButtons from '../Reuseables/Pagination';

const products = [
	{
		id: '8737637',
		image: '/GreenLimes.jpg',
		name: 'Salmon fish',
		price: '234',
		count: '1',
        tag: 'meat'
	},
];



const Product = () => {
	return (
		<div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 gap-5'>
            {products.map(product => (
                    <ProductOption
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    count={product.count}
                />
            ))}
			
			{/* <ProductOption
				id='87377'
				image='/GreenLimes.jpg'
				name='Salmon fish'
				price='234'
				count='1'
			/> */}
			{/* <ProductOption
				id='87637'
				image='/GreenLimes.jpg'
				name='Salmon fish'
				price='234'
				count='1'
			/>
			<ProductOption
				id='8737'
				image='/GreenLimes.jpg'
				name='Salmon fish'
				price='234'
				count='1'
			/>
			<ProductOption
				id='12344'
				image='/Salmon.jpg'
				name='Signature Salmon'
				price='56'
				count='1'
			/>
			<ProductOption
				id='5656'
				image='/codfillet.jpg'
				name='Cod Fillet'
				price='45'
				count='1'
			/>
			<ProductOption
				id='723673'
				image='/cream.jpg'
				name='Belmont Custard Cream'
				price='15'
				count='1'
			/>
			<ProductOption
				id='33337'
				image='/digestives.jpg'
				name='Crawford Digestives'
				price='24'
				count='1'
			/>
			<ProductOption
				id='2733'
				image='/mango.jpg'
				name='Broadwalk Air Freshner'
				price='18'
				count='1'
			/>
			<ProductOption
				id='33443'
				image='/oils.jpg'
				name='Air Wick Essential Oils'
				price='15'
				count='1'
			/>
			<ProductOption
				id='84748'
				image='/ozmo.jpg'
				name='Ozmo Air Fabric Freshner'
				price='234'
				count='1'
			/>

			<ProductOption
				id='87476437'
				image='/swordfish.jpg'
				name='Salmon fish'
				price='234'
				count='1'
			/>
			<ProductOption
				id='67373'
				image='/Salmon.jpg'
				name='Salmon fish'
				price='234'
				count='1'
			/>
			<ProductOption
				id='874737'
				image='/Salmon.jpg'
				name='Salmon fish'
				price='234'
				count='1'
			/>
			<ProductOption
				id='83737'
				image='/Salmon.jpg'
				name='Salmon fish'
				price='234'
				count='1'
			/> */}
			<PaginationButtons />
		</div>
	);
};

export default Product;
