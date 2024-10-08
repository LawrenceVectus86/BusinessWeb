import ceo from '../../assets/10.png'
import ceo1 from '../../assets/11.png'
import ceo2 from '../../assets/14.png'
import ceo3 from '../../assets/12.png'
import ceo4 from '../../assets/13.png'

const Footer = () => {
    return (
        <div id="footer">
            <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-4 relative">
                <div className="relative flex items-center justify-center w-full max-w-4xl">
                    <div className="absolute w-full h-full flex items-center justify-center">
                        <div className="w-1/2 h-1/2 rounded-full border border-green-300 absolute"></div>
                        <div className="w-3/4 h-3/4 rounded-full border border-green-300 absolute"></div>
                        <div className="w-full h-full rounded-full border border-green-300 absolute"></div>
                    </div>
                    <div className="relative z-10 text-center">
                        <h1 className="text-3xl md:text-4xl font-bold">See Yourself <span className="relative"><span className="absolute inset-0 border-b-4 border-green-500"></span>Here?</span></h1>
                        <p className="mt-4 text-gray-600 text-sm md:text-base">Experience the future of work by booking a tour at one of our unique locations. Find your perfect workspace at NexSpace.</p>
                        <button className="mt-6 px-4 py-2 md:px-6 md:py-3 bg-green-500 text-white rounded-full flex items-center mx-auto">
                            Book a Tour <i className="fas fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </div>
                <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                    <img src={ceo} alt="Person 1" className="rounded-full border-4 border-white"/>
                </div>
                <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2">
                    <img src={ceo1} alt="Person 2" className="rounded-full border-4 border-white"/>
                </div>
                <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2">
                    <img src={ceo2} alt="Person 3" className="rounded-full border-4 border-white"/>
                </div>
                <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
                    <img src={ceo3} alt="Person 4" className="rounded-full border-4 border-white"/>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img src={ceo4} alt="Person 5" className="rounded-full border-4 border-white"/>
                </div>
            </div>
            <footer className="bg-green-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="mb-8 md:mb-0">
                            <h2 className="text-2xl font-bold">NexSpace</h2>
                            <p className="mt-4">NexSpace: Revolutionizing Workspaces to Foster Innovation, Enhance Connectivity, and Empower the Next Generation of Leaders.</p>
                            <div className="flex mt-4 space-x-4">
                                <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="text-white"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
                            <div>
                                <h3 className="font-bold">Company</h3>
                                <ul className="mt-4 space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Career</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Jobs</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold">Product</h3>
                                <ul className="mt-4 space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white">Sales Software</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Privacy & Security</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Marketplace</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Status</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">API</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold">Discover</h3>
                                <ul className="mt-4 space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white">Partner Program</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Get our newsletter</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Sales Pipeline Course</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">What is CRM?</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">CRM Comparison</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">CRM Comparison</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold">Help Center</h3>
                                <ul className="mt-4 space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white">Community</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Knowledge Base</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Academy</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-gray-700 pt-4 text-center text-gray-400">
                        <p>© Copyright 2024 DesignMonks.co</p>
                        <div className="mt-4 space-x-4">
                            <a href="#" className="hover:text-white">Terms of Services</a>
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                            <a href="#" className="hover:text-white">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;