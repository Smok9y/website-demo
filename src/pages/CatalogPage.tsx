import React, { useEffect, useState } from 'react';
import { Search, Filter, Star, Users, Fuel, Settings } from 'lucide-react';

const CatalogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    document.title = 'Our Fleet | Exclusive Car Rental';
  }, []);

  const filteredCars = cars.filter(car => {
    const matchesCategory = selectedCategory === 'all' || car.category.toLowerCase() === selectedCategory;
    const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         car.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20 pb-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">OUR FLEET</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our extensive collection of premium vehicles. From luxury sedans to powerful SUVs,
            find the perfect car for your needs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="md:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search cars..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                        selectedCategory === category.value
                          ? 'bg-yellow-400 text-black'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredCars.map(car => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
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
  description: string;
}

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
        <div className="absolute top-4 left-4 bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-sm">
          {car.category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">{car.name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm">{car.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{car.description}</p>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
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
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold">${car.price}</span>
            <span className="text-gray-600">/day</span>
          </div>
          <button className="bg-black hover:bg-gray-900 text-white px-6 py-2 rounded-sm transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

const categories = [
  { label: 'All Cars', value: 'all' },
  { label: 'Luxury', value: 'luxury' },
  { label: 'SUV', value: 'suv' },
  { label: 'Sedan', value: 'sedan' },
  { label: 'Sports', value: 'sports' },
  { label: 'Electric', value: 'electric' }
];

const cars: Car[] = [
  {
    id: 1,
    name: '2022 Hyundai Elantra',
    category: 'Sedan',
    price: 59,
    image: 'https://images.pexels.com/photos/12206661/pexels-photo-12206661.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 4.8,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Hybrid',
    description: 'Modern sedan with excellent fuel economy and advanced safety features.'
  },
  {
    id: 2,
    name: 'BMW X6',
    category: 'SUV',
    price: 89,
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 4.8,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Hybrid',
    description: 'Luxury SUV combining style, comfort, and performance.'
  },
  {
    id: 3,
    name: 'Mercedes S-Class',
    category: 'Luxury',
    price: 129,
    image: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 4.9,
    seats: 4,
    transmission: 'Automatic',
    fuel: 'Premium',
    description: 'Ultimate luxury sedan with state-of-the-art technology.'
  },
  {
    id: 4,
    name: 'Tesla Model 3',
    category: 'Electric',
    price: 79,
    image: 'https://images.pexels.com/photos/7674867/pexels-photo-7674867.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 4.7,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Electric',
    description: 'High-performance electric vehicle with impressive range.'
  }
];

export default CatalogPage;