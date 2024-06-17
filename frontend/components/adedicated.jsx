import Image from "next/image";

const Adedicated = () => {
    return (
        <div className="grid sm:grid-cols-2 sm:p-10">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >   
          <source src="/path/to/your/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
            <div className="col-span-1">
                <h1>bbbbb</h1>
            </div>

            <div className="col-span-1">
                <h1 className="mb-5 sm:text-3xl font-bold">A dedicated team <br></br>to grow your company </h1>
                <p className="">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor<br></br>
                do amet sint. Velit officia consequat duis enim velit mollit.<br></br>
                Exercitation veniam consequat sunt nostrud amet.
                </p>
            </div>
        </div>
    );
};

export default Adedicated;
