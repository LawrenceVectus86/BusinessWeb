import React from 'react';
import one from '../../assets/6.jpg'
import two from '../../assets/7.jpg'
import tree from '../../assets/8.jpg'
import { ArrowUpRight } from 'lucide-react';

const locations = [
  {
    name: 'Downtown Hub',
    location: 'Celino, Italy',
    description: 'Central, state-of-the-art facilities ideal for entrepreneurs & businesses',
    image: one
  },
  {
    name: 'TechTown',
    location: 'Tokyo, Japan',
    description: 'A tech haven with high-speed internet, advanced cybersecurity',
    image: two
  },
  {
    name: 'Creative Loft',
    location: 'Lumut, Thailand',
    description: 'A creative playground with open spaces, studios for multimedia projects',
    image: tree
  }
];

const Location = () => {
  return (
    <section className="bg-green-900 text-white py-16" id='location'>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">
            Designed to Meet Every<br />
            Need of the <span className="relative">
              Professional
              <span className="absolute bottom-1 left-0 w-full h-2 bg-green-500 -z-10"></span>
            </span>
          </h2>
          <button className="bg-green-500 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-green-600 transition">
            <span>View More</span>
            <ArrowUpRight size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <div key={index} className="relative group">
              <img src={location.image} alt={location.name} className="w-full h-64 object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 rounded-lg"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold mb-1">{location.name}</h3>
                <p className="text-sm mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {location.location}
                </p>
                <p className="text-sm hidden group-hover:block transition-all duration-300">{location.description}</p>
              </div>
              <button className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-all duration-300">
                <span className="sr-only">View Details</span>
                <ArrowUpRight size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;