import primaryButton from './greenSend.svg'; 
import Image from "next/image";

export default function ButtonGreenSend() {
    return (
        <div>
          <button>
            <Image src={primaryButton} alt="Botao" style={{ width: "204px", height: "54px" }} />
          </button>
        </div>
    );
}

