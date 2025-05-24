import React from 'react';
import BookingForm from './BookingForm';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="./mainimage.jpg" 
          alt="Car Rental Image" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-1 h-full">
        <div className="flex flex-col md:flex-row items-center justify-between h-full pt-24 pb-12">
          {/* Hero Text */}
          <div className="text-white max-w-lg md:mt-0 mt-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              EXCLUSIVE & LOW COST
              <span className="block">CAR RENTAL</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-md">
              Experience luxury driving at affordable prices. Choose from our premium fleet of vehicles for your next adventure.
            </p>
            <div className="flex space-x-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-sm transition duration-300 transform hover:scale-105">
                EXPLORE FLEET
              </button>
              <button className="border-2 border-white hover:border-yellow-400 hover:text-yellow-400 text-white font-bold py-3 px-6 rounded-sm transition duration-300">
                LEARN MORE
              </button>
            </div>
          </div>
          
          {/* Booking Form */}
          <div className="md:w-auto w-full mt-12 md:mt-0">
            <BookingForm />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;