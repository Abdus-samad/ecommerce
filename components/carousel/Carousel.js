import React from "react";
import Simple from "./Simple";
import "react-multi-carousel/lib/styles.css";



const Carousel = ({ images }) => {
  return (
    <div  style={{ width: 280}}>
      <Simple deviceType={'desktop'} images={images} />
    </div>
  );
}


export default Carousel