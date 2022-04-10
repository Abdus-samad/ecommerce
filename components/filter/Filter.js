import { useContext } from 'react';
import ProductContext from '../../context/Product/productContext';
import Data from './sideOption';

const Filter = () => {
	const productContext = useContext(ProductContext);
	const { filterProduct } = productContext;

	return (
		<div>
			<div className='hidden max-h-full grid-cols-1 gap-3 overflow-auto lg:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 scrollbar'>
				{Data.map((item, index) => {
					return (
						<div
							key={index}
							onClick={() => filterProduct(item.category)}
							className='sidebar'>
							<div className='box-border flex items-center justify-center h-20 px-5 py-3'>
								{item.icon}
							</div>
							<p className='text-sm font-semibold text-gray-700'>
								{item.category}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Filter;
