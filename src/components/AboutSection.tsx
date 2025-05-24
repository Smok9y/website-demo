import React from 'react';
import { Award, ThumbsUp, Shield, Clock } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-2">ABOUT EXCLUSIVE CAR RENTAL</h2>
            <div className="h-1 w-24 bg-yellow-400 mb-6"></div>
            <p className="text-gray-600 mb-6">
              Since 2010, Exclusive Car Rental has been providing premium vehicle rental services 
              to clients who demand the very best. Our fleet consists of the latest models from 
              prestigious brands, ensuring you travel in style and comfort.
            </p>
            <p className="text-gray-600 mb-6">
              Whether you need a luxury car for a special occasion, a business trip, or simply 
              to enjoy the experience of driving a high-end vehicle, we have the perfect car for you.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <Award className="h-6 w-6 text-yellow-400 mr-2" />
                <span className="font-medium">Premium Service</span>
              </div>
              <div className="flex items-center">
                <ThumbsUp className="h-6 w-6 text-yellow-400 mr-2" />
                <span className="font-medium">Best Prices</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-yellow-400 mr-2" />
                <span className="font-medium">Safe & Secure</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-yellow-400 mr-2" />
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>
            
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-sm transition duration-300">
              LEARN MORE
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Luxury car interior" 
              className="rounded-md w-full h-64 object-cover"
            />
            <img 
              src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Sports car" 
              className="rounded-md w-full h-64 object-cover mt-8"
            />
            <img 
              src="https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Car keys" 
              className="rounded-md w-full h-64 object-cover"
            />
            <img 
              src="https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Driving experience" 
              className="rounded-md w-full h-64 object-cover mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;