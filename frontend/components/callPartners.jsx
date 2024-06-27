import Image from 'next/image'
import ipadImage from '../assets/ipad.svg'
import ButtonGreenGet from "./button/buttonGreenGet";


function CallPartners() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-8" style={{ background: 'linear-gradient(to right, #021b09, black)', color: 'white' }}>
            <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
                <Image src={ipadImage} alt="iPad" className="w-full h-auto" />
            </div>
            <div className="flex flex-col text-left md:w-1/2">
                <h2 className="text-3xl font-semibold mb-4">Unlocking Excellence: Talk to one of our specialists and start your project today</h2>
                <p className="mb-4">By creating a visual guide along the way, the designer or developer can get input from the other people involved in the website such as the customer, their manager, and other members of the team.</p>
                <p className="mb-8">Lorem ipsum dolor sit amet consectetur adipiscing elit dolor semper at ac tempus enim laoreet massa non.</p>
                <ButtonGreenGet />
            </div>
        </div>
    )
}

export default CallPartners
