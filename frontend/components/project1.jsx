import Image from 'next/image'
import processImage from '../assets/process.svg'

function Project1() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-8" style={{ background: 'linear-gradient(to right, #021b09, black)', color: 'white' }}>
            <div className="flex flex-col text-left md:w-1/2">
                <p className="text-sm text-gray-500 uppercase mb-2">Our Process</p>
                <h2 className="text-3xl font-semibold mb-4">Unlocking Excellence: Journey Through Our Company's Process</h2>
                <p className="mb-4">By creating a visual guide along the way, the designer or developer can get input from the other people involved in the website such as the customer, their manager, and other members of the team.</p>
                <p>The visual guide will provide a view to the customer of what their website or project will end up looking like.</p>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <Image src={processImage} alt="Process" className="w-full h-auto" />
            </div>
        </div>
    )
}

export default Project1
