import React from "react";
import Simple from "./Simple";
import "react-multi-carousel/lib/styles.css";



const Carousel = ({ images }) => {
  return (
    <div className="App" style={{ width: 556 }}>
      <Simple deviceType={"desktop"} images={images} />
    </div>
  );
}


export default Carousel