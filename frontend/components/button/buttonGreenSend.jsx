import primaryButton from './greenSend.svg'; 
import Image from "next/image";

export default function ButtonGreenSend() {
  return (
    <div>
      <button>
        <Image src={primaryButton} alt="Botao" className = 'w-[12.75rem]'/>
      </button>
    </div>
);
}

