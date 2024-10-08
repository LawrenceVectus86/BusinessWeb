import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ceo from '../../assets/10.jpg'
import ceo1 from '../../assets/11.png'



const testimonials = [
    {
        text: "NexSpace has transformed the way we work. The flexible office layouts and vibrant community have boosted our productivity and creativity.",
        name: "Philip Lori",
        title: "Tech Innovator",
        image: ceo
    },
    {
        text: "The community at NexSpace is amazing. The collaborative environment has helped me grow my business exponentially.",
        name: "Jane Doe",
        title: "Entrepreneur",
        image: ceo
    },
    {
        text: "The community at NexSpace is amazing. The collaborative environment has helped me grow my business exponentially.",
        name: "Calvin Lawrence",
        title: "Front-End",
        image: ceo1
    },

];

const Testi = () => {
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8" id='testimoni'>
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-4">
                    Hear from Our <span className="highlight">Community</span>
                </h1>
                <p className="text-gray-600 mb-6">
                    Hear It Straight from Our Community: Real Stories of Innovation and Success at NexSpace
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                    <button onClick={handlePrev} className="text-2xl text-black">
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    <button onClick={handleNext} className="text-2xl text-green-500">
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
                    <img src={testimonials[index].image} alt="Portrait of a person" className="rounded-full w-24 h-24 mb-4 md:mb-0 md:mr-6" />
                    <div className="text-center md:text-left">
                        <p className="text-gray-600 mb-4">{testimonials[index].text}</p>
                        <p className="text-green-500 font-bold">{testimonials[index].name}</p>
                        <p className="text-gray-500">{testimonials[index].title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testi;