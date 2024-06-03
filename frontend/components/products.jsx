import React from 'react';
import Image from "next/image";
import products from "../assets/products.svg";

const Home = () => {
  return (
    <div className="container mx-auto flex flex-col py-10 px-14 md:flex-row items-center justify-between" style={{ background: 'linear-gradient(to right, #021b09, black)' }}>
      <div className="w-full md:w-1/4 flex flex-col items-left text-white">
        <h2 className="text-3xl font-bold mb-4">Products</h2>
        <p className="text-lg mb-8">The visual guide will provide a view to the customer of what their website or project</p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center md:items-center md:space-x-4 items-center">
        <Image src={products} alt="products" width={200} height={200} className="mb-5" />
        <Image src={products} alt="products" width={200} height={200} className="mb-5" />
        <Image src={products} alt="products" width={200} height={200} className="mb-5" />
        <Image src={products} alt="products" width={200} height={200} className="mb-5" />
      </div>
    </div>
  );
};

export default Home;
