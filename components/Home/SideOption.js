import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {useTransition, animated, config} from 'react-spring';

import './styles.css';

function App() {
	const [show, setShow] = useState(false);
	const transitions = useTransition(show, null, {
		from: {
			opacity: 0,
			transform: `scale(${0.9})`,
			transformOrigin: 'top right',
		},
		enter: {opacity: 1, transform: `scale(${1})`},
		leave: {opacity: 0, transform: `scale(${0.9})`},
		config: config.wobbly,
	});

	return (
		<div className='bg-gray-200 p-8 text-right max-w-xs mx-auto'>
			<div className='relative inline-block'>
				<button
					onClick={() => setShow(!show)}
					className='bg-gray-900 inline-flex items-center pl-6 pr-2 py-2 font-semibold text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-gray-900'>
					Account
					<svg
						className='ml-2 h-6 w-6 text-white'
						fill='currentColor'
						viewBox='0 0 24 24'>
						<path d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z' />
					</svg>
				</button>

				{transitions.map(
					({item, key, props}) =>
						item && (
							<animated.div
								key={key}
								style={props}
								className='mt-2 absolute right-0 origin-top-right'>
								<div className='w-64 text-left bg-white rounded-lg shadow-lg'>
									<div className='flex items-center px-6 py-4'>
										<img
											className='h-10 w-10 rounded-full flex-no-shrink'
											src='https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=1.75&w=200&h=200&q=80'
											alt=''
										/>
										<div className='ml-4'>
											<p className='font-semibold text-gray-900 leading-none'>
												Margot Foster
											</p>
											<p>
												<a
													href='#'
													className='text-sm text-gray-600 leading-none hover:underline'>
													View Profile
												</a>
											</p>
										</div>
									</div>
									<div className='border-t-2 border-gray-200 py-1'>
										<a
											href='#'
											className='block px-6 py-3 leading-tight hover:bg-gray-200'>
											Settings and Privacy
										</a>
										<a
											href='#'
											className='block px-6 py-3 leading-tight hover:bg-gray-200'>
											Language
										</a>
									</div>
									<div className='border-t-2 border-gray-200 py-1'>
										<a
											href='#'
											className='block px-6 py-3 leading-tight hover:bg-gray-200'>
											Advertise
										</a>
										<a
											href='#'
											className='block px-6 py-3 leading-tight hover:bg-gray-200'>
											Analytics
										</a>
									</div>
									<form
										className='border-t-2 border-gray-200 py-1'
										action='#'
										method='POST'>
										<button className='block w-full px-6 py-3 text-left leading-tight hover:bg-gray-200'>
											Sign out
										</button>
									</form>
								</div>
							</animated.div>
						)
				)}
			</div>
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
