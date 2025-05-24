import React from 'react';
import { Calendar, Clock, MapPin, CreditCard, HeadsetIcon, Shield } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">OUR SERVICES</h2>
          <div className="h-1 w-24 bg-yellow-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We offer a range of services to make your car rental experience as smooth and enjoyable as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Calendar className="h-10 w-10 text-yellow-400" />}
            title="Easy & Flexible Booking"
            description="Book your car online with our easy-to-use platform. Change or cancel your reservation with flexible options."
          />
          
          <ServiceCard 
            icon={<Clock className="h-10 w-10 text-yellow-400" />}
            title="24/7 Customer Support"
            description="Our customer service team is available 24/7 to assist you with any questions or concerns."
          />
          
          <ServiceCard 
            icon={<MapPin className="h-10 w-10 text-yellow-400" />}
            title="Multiple Locations"
            description="Pick up and return your car at any of our convenient locations throughout the city."
          />
          
          <ServiceCard 
            icon={<CreditCard className="h-10 w-10 text-yellow-400" />}
            title="Transparent Pricing"
            description="No hidden fees or charges. We offer transparent pricing with all taxes and insurance included."
          />
          
          <ServiceCard 
            icon={<HeadsetIcon className="h-10 w-10 text-yellow-400" />}
            title="Premium Assistance"
            description="Enjoy VIP treatment with our premium assistance service, including personal chauffeur options."
          />
          
          <ServiceCard 
            icon={<Shield className="h-10 w-10 text-yellow-400" />}
            title="Comprehensive Insurance"
            description="Drive with peace of mind with our comprehensive insurance coverage for all rentals."
          />
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Services;