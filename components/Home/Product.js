import ProductOption from './ProductOption';
import ProductContext from '../../context/Product/productContext';
import {useContext} from 'react';

const Product = () => {
	const productContext = useContext(ProductContext);
	const {products, filtered} = productContext;

	return (
		<div className='grid grid-cols-2 gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3'>
			{filtered
				? filtered.map((product) => (
						<ProductOption
							key={product.id}
							id={product.id}
							images={product.images}
							name={product.name}
							price={product.price}
							count={product.count}
							category={product.category}
						/>
				  ))
				: products.map((product) => (
						<ProductOption
							key={product.id}
							id={product.id}
							images={product.images}
							name={product.name}
							price={product.price}
							count={product.count}
							category={product.category}
						/>
				  ))}
		</div>
	);
};

export default Product;
