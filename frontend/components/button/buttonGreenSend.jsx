import primaryButton from './greenSend.svg'; 
import Image from "next/image";

export default function ButtonGreenSend() {
    return (
        <div>
          <button type = 'submit'>
            <Image src={primaryButton} alt="Botao" className='w-[12.75rem] h-[3.375rem]'/>
          </button>
        </div>
    );
}

