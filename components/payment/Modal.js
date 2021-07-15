import React from 'react';
import {animated} from 'react-spring';
import Payment from './Payment'
import './modal.css';

const Modal = ({style, closeModal}) => (
	<animated.div style={style} className='modal'>
		
		<button className='modal-close-button' onClick={closeModal}>
			Close
		</button>
	</animated.div>
);

export default Modal;
