const sideOption = ({icon, text}) => {
    return (
        <div className='bg-white text-center py-4 px-2 rounded cursor-pointer border-2 border-white'>
					<div className='flex justify-center items-center h-20 py-3 px-5 box-border'>
						{icon}
					</div>
						<p className='font-semibold text-sm text-gray-700'>
							{text}
						</p>
				</div>
    )
}

export default sideOption
