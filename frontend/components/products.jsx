import React, { useState } from 'react';
import Image from "next/image";
import product1 from "../assets/product1.svg";
import product2 from "../assets/product2.svg";
import product3 from "../assets/product3.svg";
import product4 from "../assets/product4.svg";
import productDeg from "../assets/product_deg.svg";

const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleMouseOver = (product) => {
    setHoveredProduct(product);
  };

  const handleMouseOut = () => {
    setHoveredProduct(null);
  };

  return (
    <div className="container mx-auto flex flex-col py-10 px-14 md:flex-row items-center justify-between" style={{ background: 'linear-gradient(to right, #021b09, black)' }}>
      <div className="w-full md:w-1/4 flex flex-col items-left text-white">
        <h2 className="text-3xl font-bold mb-4">Products</h2>
        <p className="text-lg mb-8">The visual guide will provide a view to the customer of what their website or project</p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center md:items-center md:space-x-4 items-center">
        <div onMouseOver={() => handleMouseOver(product1)} onMouseOut={handleMouseOut}>
          <Image src={hoveredProduct === product1 ? productDeg : product1} alt="product1" width={200} height={200} className="mb-5" />
        </div>
        <div onMouseOver={() => handleMouseOver(product2)} onMouseOut={handleMouseOut}>
          <Image src={hoveredProduct === product2 ? productDeg : product2} alt="product2" width={200} height={200} className="mb-5" />
        </div>
        <div onMouseOver={() => handleMouseOver(product3)} onMouseOut={handleMouseOut}>
          <Image src={hoveredProduct === product3 ? productDeg : product3} alt="product3" width={200} height={200} className="mb-5" />
        </div>
        <div onMouseOver={() => handleMouseOver(product4)} onMouseOut={handleMouseOut}>
          <Image src={hoveredProduct === product4 ? productDeg : product4} alt="product4" width={200} height={200} className="mb-5" />
        </div>
      </div>
    </div>
  );
};

export default Products;
