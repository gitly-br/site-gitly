import primaryButton from './property1Default.svg'; 
import Image from "next/image";

export default function ButtonGreenStart() {
    return (
        <div>
          <button>
            <Image src={primaryButton} alt="Botao" style={{ width: "204px", height: "54px" }} />
          </button>
        </div>
    );
}

