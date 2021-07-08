import React, {Fragment} from 'react';

const Spinner = () => (
	<Fragment>
		<img
			src='/spinner.gif'
			alt='loading...'
			style={{width: '200px', margin: 'auto', display: 'block'}}
		/>
	</Fragment>
);

export default Spinner;
