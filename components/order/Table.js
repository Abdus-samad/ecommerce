/* This example requires Tailwind CSS v2.0+ */
const items = [
	{
		product: 'Banana',
		quantity: '2',
		cash: '50',
		price: '100',
		scale: '2lb',
		image: '/banana.jpg',
	},
	{
		product: 'Onions',
		quantity: '1',
		cash: '100',
		price: '100',
		scale: '2lb',
		image: '/onions.jpg',
	}
];


const head = [
	{
		Name: 'Item',
	},
	{
		Name: 'Quantity',
	},
	{
		Name: '	Price',
	},
];
export default function Example() {
	return (
		<div className='flex flex-col'>
			<div className='-my-2 overflow-x-auto -mx-[20px]'>
				<div className='table'>
					<div className='overflow-hidden'>
						<table className='min-w-full '>
							<thead className='bg-gray-50'>
								<tr>
									{head.map((item) => (
										<th className='first:pl-[110px] pr-[60px] first:text-left py-[8px] px-[20px] text-center text-[13px] font-bold text-[#0d1136] lastt:text-right'>
											{item.Name}
										</th>
									))}
								</tr>
							</thead>
							<tbody className='bg-white border-none'>
								{items.map((item) => (
									<tr key={item.email}>
										<td className='p-[20px] text-[15px] font-normal text-[#0d1136] border-none'>
											<span className='flex items-center'>
												<span className='flex-shrink-0 h-[75px] w-[75px]'>
													<img
														className='w-full h-full object-cover'
														src={item.image}
														alt=''
													/>
												</span>

												<span className='flex flex-col ml-[15px] overflow-hidden'>
													<span className='text-[15px] font-bold font-rob mb-[5px] text-[#0d1136] overflow-ellipsis inline-block'>
														{item.product}
													</span>
													<span className='text-[13px] font-rob mb-[5px] text-[#77798c] font-normal'>
														{item.scale}
													</span>
													<div className='text-[13px] font-rob text-[#009e7f] font-normal'>
														${item.cash}
													</div>
												</span>
											</span>
										</td>

										<td className='p-[20px] font-normal text-center text-[15px] text-[#0d1136]'>
											{item.quantity}
										</td>

										<td className='p-[20px] font-normal text-center text-[15px] text-[#0d1136]'>
											<p> ${item.price} </p>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
