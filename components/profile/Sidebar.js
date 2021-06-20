const Sidebar = () => {
    return (
        <div>
            <div className='wi flex-shrink mr-7'>
					<div className='w-full hidden h-auto lg:flex flex-col flex-shrink bg-white border shadow-2xl'>
						<div className='flex flex-col w-full py-10'>
							<div className='flex'>
								<a className='flex items-center text-black tb'>
									<span>Your Order</span>
								</a>
							</div>

							<div className='flex'>
								<a className='flex items-center text-black tb'>
									<span>Need Help</span>
								</a>
							</div>
						</div>

						<div className='flex flex-col w-full py-10 bg-gray-300'>
							<div className='flex'>
								<a className='flex items-center text-green-500 border-l-4 border-green-500 yu'>
									<span>Profile</span>
								</a>
							</div>
							<a className='border-none text-left cursor-pointer text-gray-800 tb'>Logout</a>
						</div>
					</div>
				</div>
        </div>
    )
}

export default Sidebar
// 
{/* <div className="cursor-pointer">
<a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center'>
	Offer
</a>
</div>

<div className='flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2 cursor-pointer'>
<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
Join
</button>
</div> 
*/}