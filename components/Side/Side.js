import { useContext } from 'react';
import ProductContext from '../../context/Product/productContext';
import Data from './sideOption'

const Side = () => {

	const productContext = useContext(ProductContext);
	const { filterProduct } = productContext;



	return (
		<div>
			<div className='lg:grid hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3 max-h-full  overflow-auto scrollbar'>
				{Data.map((item, index) => {
					return (
						<div key={index} onClick={() => filterProduct(item.category)} className='sidebar'>
							<div className='flex justify-center items-center h-20 py-3 px-5 box-border'>
								{item.icon}
							</div>
							<p className='font-semibold text-sm text-gray-700'>
								{item.category}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Side;
