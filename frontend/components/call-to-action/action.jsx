import Image from 'next/image'
import background from '../../assets/background-1.png'
import computer from '../../assets/computer.png'

function MeuComponente() {
    return (
        <div className="relative bg-black">
            <Image className="w-full" src={background} alt='Background' />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row items-center justify-center gap-6 w-65rem">
                <div className="text-white w-50rem flex flex-col items-start justify-baseline">
                    <h1 className="text-2xl font-semibold leading-tight mb-0.5">Talk to one of our specialists and start your project today.</h1>
                    <p className="mb-1.2">Lorem ipsum dolor sit amet consectetur adipiscing elit dolor semper at ac tempus enim laoreet massa non.</p>
                    <button className="bg-green-500 px-3 py-1.2">Get a free quote</button>
                </div>
                <div className="w-90">
                    <Image src={computer} alt="Computer"/>
                </div>
            </div>
        </div>
    )
}

export default MeuComponente
