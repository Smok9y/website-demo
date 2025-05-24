import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-400 mb-4">
              Experience luxury driving with our premium fleet of vehicles. 
              We offer competitive rates and exceptional service.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook className="h-5 w-5" />} />
              <SocialIcon icon={<Twitter className="h-5 w-5" />} />
              <SocialIcon icon={<Instagram className="h-5 w-5" />} />
              <SocialIcon icon={<Linkedin className="h-5 w-5" />} />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#" label="Home" />
              <FooterLink href="#about" label="About Us" />
              <FooterLink href="#fleet" label="Our Fleet" />
              <FooterLink href="#services" label="Services" />
              <FooterLink href="#locations" label="Locations" />
              <FooterLink href="#" label="Terms & Conditions" />
              <FooterLink href="#" label="Privacy Policy" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Car Categories</h3>
            <ul className="space-y-2">
              <FooterLink href="#" label="Luxury Cars" />
              <FooterLink href="#" label="Sports Cars" />
              <FooterLink href="#" label="SUVs" />
              <FooterLink href="#" label="Sedans" />
              <FooterLink href="#" label="Convertibles" />
              <FooterLink href="#" label="Electric Vehicles" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-yellow-400 mr-3 mt-0.5" />
                <span className="text-gray-400">123 Main Street, Downtown, City, 10001</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-yellow-400 mr-3" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-yellow-400 mr-3" />
                <span className="text-gray-400">info@exclusiverentals.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Exclusive Car Rental. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-500 hover:text-yellow-400 text-sm">Terms</a></li>
              <li><a href="#" className="text-gray-500 hover:text-yellow-400 text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-yellow-400 text-sm">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => {
  return (
    <li>
      <a href={href} className="text-gray-400 hover:text-yellow-400 transition duration-300">
        {label}
      </a>
    </li>
  );
};

interface SocialIconProps {
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => {
  return (
    <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-yellow-400 hover:text-black transition duration-300">
      {icon}
    </a>
  );
};

export default Footer;