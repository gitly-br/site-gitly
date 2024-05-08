import Image from "next/image";
import Pessoa from '../assets/pessoa.png'

function Ourclients() {
    return (
        <div class = 'py-12 px-8 bg-black'>
            <div>
                <h1 class = 'text-4xl text-white'>What our clients say</h1>
                <p class = 'mt-3 text-white'>Lorem ipsum dolor sit amet consectetur adipiscing elit semper<br></br> dalar elementum tempus hac tellus libero accumsan. </p>
            </div>

            <div class = 'display:flex'>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"> 
                    <div className="bg-[#001D09] rounded-lg flex flex-col sm:flex-row items-center justify-between">
                        <div className="w-1/6 sm:w-1/2 pr-3">
                            <Image src={Pessoa} alt="Imagem" className = 'w-full h-full'/>
                        </div>
                        <div className="w-5/6 text-white">
                            <p className = 'text-base'>Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices scelerisque mi sed interdum lacus tellus in mi orc, netus nisl laoreet.</p>
                            <p class = 'text-[#146237] mt-5 text-base'>
                                <b>Emily Blunt</b>
                            </p>
                            <p className = 'mt-3 text-sm'>
                                CEO at <u>Krasinski</u>
                            </p>
                        </div>
          
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Ourclients
