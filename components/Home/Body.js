import React from 'react';
import Side from './Side';
import ImageSlider from '../Reuseables/ImageSlider'
import Cart from '../Cart/Cart'
import Product from './Product'
import BottomCart from '../Cart/BottomCart';

const Body = () => {
    return (
        <div className='grid gap-7 lg:grid-flow-col p-3'>
            <Side />
        <div className='mt-2'>
          <ImageSlider />
          <Product /> 
          <Cart />
          <BottomCart />
        </div>
        </div>
    );
}

export default Body;
