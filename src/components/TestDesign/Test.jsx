import design from '../../assets/9.jpg'

const Test = () => {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://frameworkengenharia.com.br/wp-content/uploads/2024/09/engenheiro-estrutura-seguranca-eficaz.webp')" }}>
            <nav className="flex justify-between items-center p-6">
                <div className="flex items-center space-x-2">
                    <img src="https://placehold.co/40x40" alt="Prime Nest Logo" className="h-8 w-8"/>
                    <span className="text-white text-xl font-bold">PRIME NEST</span>
                </div>
                <div className="hidden md:flex space-x-8 text-white">
                    <a href="#" className="hover:underline">Home</a>
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Features</a>
                    <a href="#" className="hover:underline">Contact</a>
                </div>
                <button className="hidden md:block border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-blue-600">
                    Get started <i className="fas fa-arrow-right"></i>
                </button>
            </nav>
            <div className="absolute top-1/4 left-8 md:left-1/4 transform -translate-y-1/4">
                <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight pe-8">
                    Providing <span className="italic">luxury</span> & <br className="hidden md:block" />
                    <span className="italic">comfort</span> to all
                </h1>
                <button className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
                    Contact us <i className="fas fa-arrow-right"></i>
                </button>
            </div>
            <div className="absolute top-1/2 right-8 md:top-1/4 md:right-1/4 transform -translate-y-1/2 md:translate-y-0 text-center md:text-left">
                <p className="text-white text-lg">
                    Whether you're a first-time buyer, looking to <br className="hidden md:block" />
                    sell, or seeking an investment property, our <br className="hidden md:block" />
                    team of experienced.
                </p>
                <div className="flex justify-center md:justify-start items-center mt-4">
                    <img src="https://placehold.co/40x40" alt="Team member 1" className="h-10 w-10 rounded-full border-2 border-white"/>
                    <img src="https://placehold.co/40x40" alt="Team member 2" className="h-10 w-10 rounded-full border-2 border-white -ml-2"/>
                    <img src="https://placehold.co/40x40" alt="Team member 3" className="h-10 w-10 rounded-full border-2 border-white -ml-2"/>
                    <img src="https://placehold.co/40x40" alt="Team member 4" className="h-10 w-10 rounded-full border-2 border-white -ml-2"/>
                    <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-500 flex items-center justify-center -ml-2">
                        <i className="fas fa-plus text-white"></i>
                    </div>
                </div>
                <p className="text-white mt-2">60k+ rating (4.5)</p>
            </div>
        </div>
    );
};

export default Test;