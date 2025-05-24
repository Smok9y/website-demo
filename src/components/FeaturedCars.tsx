import React from 'react';
import { Star, Users, Fuel, Settings } from 'lucide-react';

const FeaturedCars: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100" id="fleet">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">OUR PREMIUM FLEET</h2>
          <div className="h-1 w-24 bg-yellow-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Choose from our wide selection of premium and luxury vehicles for any occasion. 
            We offer the best rates on all our rental cars.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-black hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-sm transition duration-300 transform hover:scale-105">
            VIEW ALL VEHICLES
          </button>
        </div>
      </div>
    </section>
  );
};

interface Car {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  seats: number;
  transmission: string;
  fuel: string;
}

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 group">
      <div className="relative">
        <img src={car.image} alt={car.name} className="w-full h-56 object-cover" />
        <div className="absolute top-4 left-4 bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-sm">
          {car.category}
        </div>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            RESERVE NOW
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold">{car.name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm">{car.rating}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600 text-sm">Starting at</p>
          <p className="text-2xl font-bold">${car.price}<span className="text-sm font-normal text-gray-600">/day</span></p>
        </div>
        
        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-200">
          <div className="flex flex-col items-center text-gray-600">
            <Users className="h-5 w-5 mb-1" />
            <span className="text-xs">{car.seats} seats</span>
          </div>
          <div className="flex flex-col items-center text-gray-600">
            <Settings className="h-5 w-5 mb-1" />
            <span className="text-xs">{car.transmission}</span>
          </div>
          <div className="flex flex-col items-center text-gray-600">
            <Fuel className="h-5 w-5 mb-1" />
            <span className="text-xs">{car.fuel}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const featuredCars: Car[] = [
  {
    id: 1,
    name: 'BMW X6',
    category: 'SUV',
    price: 89,
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 4.8,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Hybrid'
  },
  {
    id: 2,
    name: 'Mercedes S-Class',
    category: 'LUXURY',
    price: 129,
    image: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 4.9,
    seats: 4,
    transmission: 'Automatic',
    fuel: 'Premium'
  },
  {
    id: 3,
    name: 'Audi A7',
    category: 'SEDAN',
    price: 99,
    image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 4.7,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Premium'
  }
];

export default FeaturedCars;