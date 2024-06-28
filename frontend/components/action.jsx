import Image from 'next/image'
import background from "../../assets/background.svg"
import computer from "../../assets/computer.png"
import ButtonGreenGet from '../button/buttonGreenGet'

function MeuComponente() {
    return (
        <div className="relative bg-black">
            <Image className="w-full h-auto" src={background} alt='Background' />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row items-center justify-center gap-24 w-[65rem]">
                <div className="text-white w-[50rem] flex flex-col items-start justify-start">
                    <h1 className="text-2xl font-medium leading-none mb-2">Talk to one of our specialists and start your project today.</h1>
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipiscing elit dolor semper at ac tempus enim laoreet massa non.</p>
                    <ButtonGreenGet />
                </div>
                <div className="w-[90%]">
                    <Image src={computer} alt="Computer" />
                </div>
            </div>
        </div>
    )
}

export default MeuComponente
