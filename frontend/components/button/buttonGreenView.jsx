import primaryButton from './buttonGreenView.svg'; 
import Image from "next/image";

export default function ButtonGreenView() {
    return (
        <div>
          <button>
            <Image src={primaryButton} alt="Botao" className='w-12.75rem h-3.375rem' />
          </button>
        </div>
    );
}

