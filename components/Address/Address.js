import { PencilIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";

const Address = ({close}) => {
	

	return (
		<div className='mb-10 box-border -mx-2 flex-initial flex-wrap flex-row'>
			<div className='box-boder flex-4 px-2 dp relative'>
				<h3 className='text-base mb-6 flex items-center text-gray-800 font-semibold'>
					Delivery Address
				</h3>
				<div className='flex flex-col'>
					<div className='flex-grow flex flex-wrap justify-between'>
						<label className='contact-1 label nb'>
							<span className='text-sm font-bold text-gray-800 mb-1'>
								Home
							</span>
							<span className='text-base font-normal text-gray-600'>
								27 Street, 2569 Heritage Road Visalia, CA 93291
							</span>
							<span className='btn wrap'>
								<span className='contactBtn bg-green-600'>
									<PencilIcon className='h-4' />{' '}
								</span>
								<span className='contactBtn bg-red-500'>
									<XIcon className='h-4' />{' '}
								</span>
							</span>
						</label>
						<label className='contact-2 label nb'>
							<span className='text-sm font-bold text-gray-800 mb-1'>
								Office
							</span>
							<span className='text-base font-normal text-gray-600'>
								33 Baker Street, Crescent Road, CA 65746
							</span>
							<span className='btn wrap'>
								<span className='contactBtn bg-green-600'>
									<PencilIcon className='h-4' />{' '}
								</span>
								<span className='contactBtn bg-red-500'>
									<XIcon className='h-4' />{' '}
								</span>
							</span>
						</label>
						<button className='button add'>Add Address</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Address;
