import Related from './Related';
import ProductContext from '../../context/Product/productContext';
import {useContext} from 'react'

const Option = () => {
	const productContext = useContext(ProductContext);
	const { products } = productContext;

	return (
		<div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 mt-20'>
		{products.map((product) => (
						<Related
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

export default Option;
