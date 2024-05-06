import Image from "next/image";
import Pessoa from '../assets/pessoa.jpeg'


function Ourclients() {
    return (
        <div class = 'py-12 px-8 bg-[#001D09]'>
            <div>
                <h1 class = 'text-4xl text-white'>What our clients say</h1>
                <p class = 'mt-3 text-white'>Lorem ipsum dolor sit amet consectetur adipiscing elit semper<br></br> dalar elementum tempus hac tellus libero accumsan. </p>
            </div>

            <div class = 'display:flex'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"> 
                    <div className="bg-[#092d19] p-4 rounded-lg flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-4">
                            <Image src={Pessoa} alt="Imagem" className="rounded-lg"/>
                        </div>
                        <div className="md:w-1/2 text-white md:pl-4">
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet.</p>
                            <p class = 'text-[#146237]'>
                                <b>Emily Blunt</b>
                            </p>
                            <p>
                                CEO at Krasinski
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#092d19] p-4 rounded-lg flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-4">
                            <Image src={Pessoa} alt="Imagem" width={600} height={450} className="rounded-lg"/>
                        </div>
                        <div className="md:w-1/2 text-white md:pl-4">
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet.</p>
                            <p class = 'text-[#146237]'>
                                <b>Emily Blunt</b>
                            </p>
                            <p>
                                CEO at Krasinski
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#092d19] p-4 rounded-lg flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-4">
                            <Image src={Pessoa} alt="Imagem" width={600} height={450} className="rounded-lg"/>
                        </div>
                        <div className="md:w-1/2 text-white md:pl-4">
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet.</p>
                            <p class = 'text-[#146237]'>
                                <b>Emily Blunt</b>
                            </p>
                            <p>
                                CEO at Krasinski
                            </p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Ourclients
