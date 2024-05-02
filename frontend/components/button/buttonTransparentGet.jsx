import primaryButton from './buttonTransparent.svg'; 
import Image from "next/image";
import Link from 'next/link';

export default function ButtonTransparentGet() {
    return (
      <Link href = '/endpoint'>
        <div>
          <button>
            <Image src={primaryButton} alt="Botao" className='w-12.75rem h-3.375rem' />
          </button>
        </div>
      </Link>
    );
}

