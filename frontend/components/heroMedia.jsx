import videoHero from '../assets/videoHero.svg'

function HeroMedia() {
    return (
        <div className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${videoHero.src})` }}>
            <div className="p-8 text-center w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 bg-black bg-opacity-50 rounded-lg">
                <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">A dedicated team to grow your company</h1>
                <p className="text-base md:text-lg text-white mb-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <p className="text-base md:text-lg text-white mb-8">Lorem ipsum dolor sit amet consectetur adipiscing elit dolor semper at ac tempus enim laoreet massa non.</p>
                <button className="border border-white rounded-br-lg w-48 h-12 text-white">Learn More</button>
            </div>
        </div>
    )
}

export default HeroMedia
