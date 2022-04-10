import React from "react";
import Simple from "./Simple";
import "react-multi-carousel/lib/styles.css";



const Carousel = ({ images }) => {
  return (
    <div  style={{ width: 350}}>
      <Simple deviceType={'desktop'} images={images} />
    </div>
  );
}


export default Carousel