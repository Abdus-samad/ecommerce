import {XIcon} from '@heroicons/react/outline';
import {useContext} from 'react';
import ProductContext from '../../context/Product/productContext';
import Data from './sideOption';

const FilterDrawer = (props) => {
	const productContext = useContext(ProductContext);
	const {filterProduct} = productContext;

	return (
		<div className={props.drawer ? 'filter active' : 'filter'}>
			<div className='w-full h-full flex flex-col rounded bg-white box-content '>
				<div className=' flex items-center justify-center'>
					<a className='absolute inline-flex items-center justify-center -top-11 bg-white w-9 h-9 rounded-full text-gray-800 backdrop-blur-2xl '>
						<XIcon className='h-5' onClick={props.showDrawer} />
					</a>
				</div>
				<div className='grid grid-cols-2 auto-row-max pb-8 max-h-full  gap-3 overflow-auto scrollbar'>
					{Data.map((item, index) => {
						return (
							<div
								key={index}
								onClick={() => filterProduct(item.category)}
								className='bg-gray-100 text-center py-4 px-3 cursor-pointer border rounded-xl'>
								<div className='box-border min-w-0 py-3 px-4 h-20 flex justify-center items-center'>
									{item.icon}
								</div>
								<span className='box-border min-w-0 text-black text-sm font-semibold'>
									{item.category}
								</span>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default FilterDrawer;

