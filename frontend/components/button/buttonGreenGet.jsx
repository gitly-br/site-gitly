import primaryButton from './greenGet.svg'; 
import Image from "next/image";

export default function ButtonGreenGet() {
    return (
        <div>
          <button>
            <Image src={primaryButton} alt="Botao" className = 'w-[12.75rem]'/>
          </button>
        </div>
    );
}

