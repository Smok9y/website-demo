import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import FeaturedCars from '../components/FeaturedCars';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Locations from '../components/Locations';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Exclusive Car Rental | Premium Vehicles';
  }, []);

  return (
    <main>
      <Hero />
      <AboutSection />
      <FeaturedCars />
      <Services />
      <Testimonials />
      <Locations />
    </main>
  );
};

export default HomePage;