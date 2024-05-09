import React from 'react';
import Image from "next/image";
import project1 from "../assets/project1.svg";
import project2 from "../assets/project2.svg";
import project3 from "../assets/project3.svg";
import project4 from "../assets/project4.svg";

const Projects = () => {
  return (
    <div className="bg-[#001D09] text-white container mx-auto py-10 px-14 justify-center">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <p className="text-lg mb-8">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.</p>
      <div className="flex justify-center items-center space-x-4">
        <Image src={project1} alt="Project 1" width={200} height={150} />
        <Image src={project2} alt="Project 2" width={200} height={150} />
        <Image src={project3} alt="Project 3" width={200} height={150} />
        <Image src={project4} alt="Project 4" width={200} height={150} />
      </div>
      <button className="text-[16px] bg-[#11562F] py-3 mx-auto mt-8 block">Ver todos os projetos</button>
    </div>
  );
};

export default Projects;
