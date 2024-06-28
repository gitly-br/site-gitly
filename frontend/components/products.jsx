import React from 'react';
import Image from "next/image";
import product1 from "../assets/product1.svg";
import product2 from "../assets/product2.svg";
import product3 from "../assets/product3.svg";
import product4 from "../assets/product4.svg";

const Products = () => {
  return (
    <div className="bg-[#001D09] container mx-auto flex flex-col py-10 px-14 md:flex-row items-center justify-between" style={{ background: 'linear-gradient(to right, #021b09, black)', color: 'white' }}>
      <div className="w-full md:w-1/4 flex flex-col md:items-left mb-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Nossos Produtos</h2>
        <p className="text-lg mb-8">Oferecemos uma linha de produtos inovadores baseados em inteligência artificial, projetados para otimizar operações empresariais e melhorar a tomada de decisões. Nossas soluções abrangem desde análise de dados até automação de processos, todas com interfaces intuitivas e de fácil implementação.</p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center md:items-center md:space-x-4 items-center w-full md:w-3/4">
        <Image src={product1} alt="product1" width={200} height={200} className="mb-4" />
        <Image src={product2} alt="product2" width={200} height={200} className="mb-4" />
        <Image src={product3} alt="product3" width={200} height={200} className="mb-4" />
        <Image src={product4} alt="product4" width={200} height={200} className="mb-4" />
      </div>
    </div>
  );
};

export default Products;

