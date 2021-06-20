const ProfileForm = () => {
	return (
		<div className='lg:widht p-5 h-auto min flex flex-col lg:tbx lg:border lg:border-gray-300'>
			<div className='flex flex-col w-full'>
				<div className='w-full flex items-center justify-between mb-6'>
					<h3 className='text-xl font-semibold text-gray-800'>
						Your Profile
					</h3>
				</div>
				<div
					className=' mb-10 box-border -mx-2 flex-initial flex-wrap flex-row'
					style={{
						marginBottom: '50px',
						display: 'flex',
						alignItems: 'flex-end',
					}}>
					<div className='box-border flex-grow-0 flex-shrink-0 px-2'>
						<label className='font-bold text-sm text-gray-800 leading-4 mb-4 flex'>
							Name
						</label>
                        <input 
                        type="text"
                        label="Name" 
                        name="name" 
                        height="48px" 
                        className='block w-full px-5 border-solid border-gray-100 h-12 text-sm rounded-md text-gray-800 bg-gray-200' 
                        value="Alex Hunter"/>
					</div>
                    <div className='box-border flex-grow-0 flex-shrink-0 px-2'>
						<label className='font-bold text-sm text-gray-800 leading-4 mb-4 flex'>
							Email
						</label>
                        <input 
                        type="text"
                        label="Name" 
                        name="name" 
                        height="48px" 
                        className='block w-full px-5 border-solid border-gray-100 h-12 text-sm rounded-md text-gray-800 bg-gray-200' 
                        value="alexh@gmail"/>
					</div>
                    <div className='box-border flex-grow-0 flex-shrink-0 px-2'>
                        <a style={{ width: '100%' }} className='px-8 text-sm tr flex-shrink-0 text-center h-12 cursor-pointer text-white bg-green-600 hover:bg-green-700 rounded-md flex items-center justify-center'>
                            Save
                        </a>
                    </div>
				</div>
                <div className='mb-10 box-border -mx-2 flex-initial flex-wrap flex-row'>

                </div>
            </div>
		</div>
	);
};

export default ProfileForm;
/*
 */