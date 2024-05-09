import primaryButton from './buttonTransparentView.svg'; 
import Image from "next/image";

export default function buttonTransparentView() {
    return (
        <div>
          <button>
            <Image src={primaryButton} alt="Botao" className='w-[12.75rem] h-[3.375rem]' />
          </button>
        </div>
    );
}

