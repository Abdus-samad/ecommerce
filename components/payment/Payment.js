import {useRouter} from 'next/router';

const Payment = () => {
	const router = useRouter();

	const handleClick = (e) => {
		e.preventDefault();
		router.push('/order-received');
	};

	return (
		<div className='addressContainer'>
			<h3 className='text-xl font-normal text-[#0d1136] mb-[35px] flex items-center iD'>
				Payment
			</h3>
			<form>
				<h2 className='text-xl flex font-bold text-gray-800 mb-4'>
					Enter Card Info
				</h2>
				<div className='w-full flex flex-col mb-4'>
					<input type='text' className='PaymentInput' />
				</div>
			</form>
			<span className='text-[13px] font-normal text-[#77798c] leading-6 mt-[30px] block'>
				By making this purchase you agree to our
				<span className='text-[13px] font-normal text-[#ff5b60] ml-1 cursor-pointer leading-6'>
					terms and conditions.
				</span>
			</span>
			<div className='mt-[25px]'>
				<button
					onClick={handleClick}
					style={{width: '100%'}}
					className='PayBtn'>
					Proceed To Checkout
				</button>
			</div>
		</div>
	);
};

export default Payment;
