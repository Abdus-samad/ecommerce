import {useRouter} from 'next/router';
import {useState} from 'react';

const Payment = () => {
	const router = useRouter();
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(null);
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		router.push('/order-received');
		setProcessing(true);
	};
	const handleChange = (event) => {
		setDisabled(event.empty);
		setError(event.error ? event.error.message : '');
	};
	return (
		<div className='addressContainer'>
			<h3 className='text-xl font-normal text-[#0d1136] mb-[35px] flex items-center iD'>
				Payment
			</h3>
			<form onSubmit={handleSubmit}>
				<h2 className='text-xl flex font-bold text-gray-800 mb-4'>
					Enter Card Info
				</h2>
				<div className='w-full flex flex-col mb-4'>
					<input
						type='text'
						className='PaymentInput'
						onChange={handleChange}
					/>
				</div>
				<span className='text-[13px] font-normal text-[#77798c] leading-6 mt-[30px] block'>
					By making this purchase you agree to our
					<span className='text-[13px] font-normal text-[#ff5b60] ml-1 cursor-pointer leading-6'>
						terms and conditions.
					</span>
				</span>
				<div
					className='mt-[25px]'
					disabled={processing || disabled || succeeded}>
					{processing ? (
						<button
							style={{width: '100%'}}
							className='PayBtnDisable'>
							Proceed To Checkout
						</button>
					) : (
						<button style={{width: '100%'}} className='PayBtn'>
							Proceed To Checkout
						</button>
					)}
				</div>
			</form>
		</div>
	);
};

export default Payment;
