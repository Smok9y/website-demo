import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const BookingForm: React.FC = () => {
  return (
    <div className="bg-black/90 text-white p-6 rounded-md shadow-lg w-full max-w-md">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">RENT A CAR</h2>
        <div className="h-1 w-32 bg-yellow-400 mt-2"></div>
        <p className="text-sm text-gray-400 mt-2">CALCULATE & BOOK</p>
      </div>
      
      <form className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Car Type</label>
          <div className="relative">
            <select className="block w-full bg-gray-900 border border-gray-700 rounded-sm py-3 px-4 pr-8 text-white appearance-none focus:outline-none focus:ring-1 focus:ring-yellow-400">
              <option>ALL CAR TYPES</option>
              <option>ECONOMY</option>
              <option>STANDARD</option>
              <option>LUXURY</option>
              <option>SUV</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Car Brand</label>
          <div className="relative">
            <select className="block w-full bg-gray-900 border border-gray-700 rounded-sm py-3 px-4 pr-8 text-white appearance-none focus:outline-none focus:ring-1 focus:ring-yellow-400">
              <option>ALL CAR BRANDS</option>
              <option>BMW</option>
              <option>MERCEDES</option>
              <option>AUDI</option>
              <option>LEXUS</option>
              <option>PORSCHE</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Pick-up Date</label>
            <div className="relative">
              <input
                type="date"
                className="block w-full bg-gray-900 border border-gray-700 rounded-sm py-3 px-4 text-white appearance-none focus:outline-none focus:ring-1 focus:ring-yellow-400"
              />
              <Calendar className="pointer-events-none absolute top-3 right-3 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Return Date</label>
            <div className="relative">
              <input
                type="date"
                className="block w-full bg-gray-900 border border-gray-700 rounded-sm py-3 px-4 text-white appearance-none focus:outline-none focus:ring-1 focus:ring-yellow-400"
              />
              <Calendar className="pointer-events-none absolute top-3 right-3 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Pick-up Location</label>
          <div className="relative">
            <select className="block w-full bg-gray-900 border border-gray-700 rounded-sm py-3 px-4 pr-8 text-white appearance-none focus:outline-none focus:ring-1 focus:ring-yellow-400">
              <option>ALL LOCATIONS</option>
              <option>DOWNTOWN</option>
              <option>AIRPORT</option>
              <option>WEST SIDE</option>
              <option>SOUTH DISTRICT</option>
            </select>
            <MapPin className="pointer-events-none absolute top-3 right-3 h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-4 rounded-sm transition duration-300 transform hover:scale-105">
          BOOK NOW
        </button>
      </form>
    </div>
  );
};

export default BookingForm;