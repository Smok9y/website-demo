import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Locations: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="locations">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">OUR LOCATIONS</h2>
          <div className="h-1 w-24 bg-yellow-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Find us at convenient locations throughout the city. Visit us today or contact our team to learn more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-8 rounded-md">
            <h3 className="text-2xl font-bold mb-4">Find Us</h3>
            <div className="space-y-4">
              {locations.map((location) => (
                <LocationCard key={location.id} location={location} />
              ))}
            </div>
          </div>
          
          <div className="rounded-md overflow-hidden h-[400px]">
            {/* This would be replaced with an actual map integration */}
            <div className="bg-gray-300 w-full h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-600 mx-auto mb-2" />
                <p className="text-gray-700">Interactive Map</p>
                <p className="text-sm text-gray-500">Map would be integrated here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface Location {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
}

interface LocationCardProps {
  location: Location;
}

const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  return (
    <div className="border-b border-gray-200 pb-4 last:border-b-0">
      <h4 className="text-lg font-bold">{location.name}</h4>
      <div className="flex items-start mt-2">
        <MapPin className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
        <p className="text-gray-600">{location.address}</p>
      </div>
      <div className="flex items-center mt-2">
        <Phone className="h-5 w-5 text-yellow-400 mr-2" />
        <p className="text-gray-600">{location.phone}</p>
      </div>
      <div className="flex items-center mt-2">
        <Mail className="h-5 w-5 text-yellow-400 mr-2" />
        <p className="text-gray-600">{location.email}</p>
      </div>
      <p className="text-sm text-gray-500 mt-2">{location.hours}</p>
    </div>
  );
};

const locations: Location[] = [
  {
    id: 1,
    name: 'Downtown Office',
    address: '123 Main Street, Downtown, City, 10001',
    phone: '+1 (555) 123-4567',
    email: 'downtown@exclusiverentals.com',
    hours: 'Mon-Fri: 8am-8pm, Sat-Sun: 9am-6pm'
  },
  {
    id: 2,
    name: 'Airport Location',
    address: 'Terminal 3, International Airport, City, 10002',
    phone: '+1 (555) 987-6543',
    email: 'airport@exclusiverentals.com',
    hours: 'Open 24/7'
  }
];

export default Locations;