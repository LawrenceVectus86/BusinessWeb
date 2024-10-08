import React from 'react';
import {ArrowUpRight} from 'lucide-react'
import gambar from '../../assets/1.jpg'
import airbnb from '../../assets/airbnb.png'
import amazon from '../../assets/Amazon_logo.svg'
import canon from '../../assets/3.png'
import wize from '../../assets/4.svg'
import stripe from '../../assets/5.png'
import dhl from '../../assets/2.png'

const Home= () => {
  return (
    <div className="bg-green-900 min-h-screen text-white p-8" id='home'>
      <header className="flex justify-between items-center mb-16">
        <div className="flex items-center space-x-2">
          {/* <div className="w-8 h-8 bg-white rounded-md"></div> */}
          <span className="text-xl font-bold">NexSpace</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-green-400 hover:text-green-300">Home</a>
          <a href="#about" className="hover:text-green-300">About Us</a>
          <a href="#solutions" className="hover:text-green-300">Solutions</a>
          <a href="#location" className="hover:text-green-300">Places</a>
          <a href="#testimoni" className="hover:text-green-300">Testimoni</a>
          <a href="#footer" className="hover:text-green-300">Help</a>
        </nav>
        <button className="bg-green-950 text-white px-4 py-2 rounded-full hover:bg-green-800 transition">
          Contact Us
        </button>
      </header>

      <main className="flex flex-col md:flex-row items-start justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Experience the Future of Work with NexSpace
            <span className="inline-block w-4 h-4 bg-green-400 ml-2"></span>
          </h1>
          <p className="mb-8 text-gray-300">NexSpace: Revolutionizing Workspaces to Foster Innovation, Enhance Connectivity, and Empower the Next Generation of Leaders.</p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-green-400 transition">
            <span>Get Started</span>
            <ArrowUpRight size={20} />
          </button>
          <div className="mt-8 relative">
            {/* <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-green-800 rounded-full p-4">
              <ArrowUpRight size={24} className="text-white" />
            </div> */}
            <p className="text-sm uppercase tracking-wider">To know more</p>
            <p className="text-sm uppercase tracking-wider">Scroll down</p>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <img src={gambar} alt="Modern green office space" className="rounded-3xl shadow-lg" />
          <div className="absolute -bottom-4 -right-4 bg-white text-green-900 p-4 rounded-xl shadow-lg">
            <h3 className="font-bold text-xl">&gt;90%</h3>
            <p className="text-sm">Satisfaction level</p>
            <div className="mt-2">
              <div className="flex justify-between items-center">
                <span className="text-xs">Till 2024</span>
                <span className="text-yellow-500">👍</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                <div className="bg-green-500 h-2.5 rounded-full" style={{width: '92%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-16 overflow-hidden">
      <div className="flex justify-between items-center animate-scroll-left space-x-8">
        <img src={airbnb} alt="Airbnb" className="h-20 w-30" />
        <img src={amazon} alt="Amazon" className="h-10 w-20" />
        <img src={canon} alt="Canon" className="h-20 w-20" />
        <img src={wize} alt="Wise" className="h-20 w-20" />
        <img src={dhl} alt="DHL" className="h-20 w-20" />
        <img src={stripe} alt="Stripe" className="h-20 w-20" />
      </div>
    </footer>

    </div>
  );
};

export default Home;