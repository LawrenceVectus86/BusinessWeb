import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import one from '../../assets/6.jpg'
import two from '../../assets/7.jpg'
import tree from '../../assets/8.jpg'

const solutions = [
  {
    id: '01',
    title: 'Virtual Office Solutions',
    description: 'All the benefits of an office without the commute; ideal for remote professionals seeking structure and connectivity.',
    image: one
  },
  {
    id: '02',
    title: 'Meeting and Conference Rooms',
    description: 'Equipped with the latest technology, our rooms are perfect for everything from local team meetings to international conferences.',
    image: two
  },
  {
    id: '03',
    title: 'Business Services',
    description: 'Comprehensive support including legal, tech, and administrative assistance to help streamline your operations.',
    image: tree
  }
];

const WorkSpace = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % solutions.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + solutions.length) % solutions.length);
  };

  return (
    <section className="bg-white py-16" id='solutions'>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">
          Explore Our <span className="relative">
            Revolutionary
            <span className="absolute bottom-1 left-0 w-full h-2 bg-green-300 -z-10"></span>
          </span>
          <br />Workspace Solutions
        </h2>
        <p className="text-gray-600 mb-8">
          From smart co-working spaces to virtual offices, explore how our services boost 
          productivity and inspire innovation in your work.
        </p>
        
        <div className="relative">
          <div className="flex overflow-hidden">
            {solutions.map((solution, index) => (
              <div 
                key={solution.id}
                className={`w-full flex-shrink-0 transition-transform duration-300 ease-in-out ${
                  index === currentIndex ? 'transform translate-x-0' : 'transform translate-x-full'
                }`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="bg-gray-100 rounded-xl p-6 mr-4 h-full">
                  <span className="text-4xl font-bold text-gray-300">{solution.id}</span>
                  <h3 className="text-2xl font-bold mt-2 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  {solution.image && (
                    <img src={solution.image} alt={solution.title} className="w-full h-48 object-cover rounded-lg" />
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-end mt-4">
            <button onClick={prevSlide} className="p-2 bg-gray-200 rounded-full mr-2 hover:bg-gray-300 transition">
              <ArrowLeft size={20} />
            </button>
            <button onClick={nextSlide} className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSpace;