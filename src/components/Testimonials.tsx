import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">CUSTOMER TESTIMONIALS</h2>
          <div className="h-1 w-24 bg-yellow-400 mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their experience with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-md">
      <div className="flex items-center mb-4">
        <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h3 className="font-bold">{testimonial.name}</h3>
          <p className="text-sm text-gray-400">{testimonial.role}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
          />
        ))}
      </div>
      
      <p className="text-gray-300">"{testimonial.text}"</p>
    </div>
  );
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Michael Thompson',
    role: 'Business Executive',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 5,
    text: 'The service was impeccable. The BMW X6 I rented was in pristine condition and made my business trip so much more comfortable. Will definitely use Exclusive Car Rental again!'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Travel Blogger',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 5,
    text: 'I needed a luxury car for a photoshoot and Exclusive delivered beyond my expectations. The booking process was smooth, and the car was exactly what I needed.'
  },
  {
    id: 3,
    name: 'David Rodriguez',
    role: 'Entrepreneur',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 4,
    text: 'The Mercedes I rented was fantastic for my weekend getaway. The only reason for 4 stars is that pickup took a bit longer than expected, but the car and service were otherwise perfect.'
  }
];

export default Testimonials;