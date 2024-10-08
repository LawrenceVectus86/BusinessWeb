import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import homi from '../../assets/6.jpg'

const About = () => {
  return (
    <section className="bg-white text-gray-800 py-16" id='about'>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img 
            src={homi}
            alt="Modern NexSpace office" 
            className="rounded-3xl shadow-lg w-full"
          />
          <div className="mt-4 bg-gray-100 rounded-xl p-4">
            <h3 className="font-bold text-xl mb-2">Core Functionality</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li>• 24/7 Access</li>
              <li>• Community</li>
              <li>• Support Services</li>
              <li>• Global Pass</li>
              <li>• Security</li>
              <li className="text-green-600 font-semibold">& Many More »</li>
            </ul>
          </div>
        </div>
        
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="relative">
              Innovating Tomorrow's
              <span className="absolute -top-1 left-0 right-0 h-4 bg-green-300 opacity-50 transform -rotate-1"></span>
            </span>
            <br />Workspaces Today
          </h2>
          
          <h3 className="text-xl font-semibold mb-4">
            NexSpace: Where the Future Begins, More Than Just a Workspace—It's Inspiration.
          </h3>
          
          <p className="mb-6 text-gray-600">
            At NexSpace, we believe the future of work transcends location—it's about how you work. We create spaces that nurture innovation, collaboration, and productivity.
          </p>
          
          <div className="flex space-x-12 mb-8">
            <div>
              <h4 className="text-3xl font-bold text-green-600">400+</h4>
              <p>Client</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-green-600">50+</h4>
              <p>Office</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-green-600">12Y+</h4>
              <p>Experience</p>
            </div>
          </div>
          
          <button className="bg-green-500 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-green-600 transition">
            <span>Learn More</span>
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;