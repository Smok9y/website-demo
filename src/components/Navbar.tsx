import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/70 to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/">
            <Logo />
          </Link>
          
          <div className="hidden md:flex space-x-1 lg:space-x-8">
            <NavItem href="/" label="HOME" active={location.pathname === '/'} />
            <NavItem href="/#about" label="ABOUT US" />
            <NavItem href="/catalog" label="OUR FLEET" active={location.pathname === '/catalog'} />
            <NavItem href="/#rates" label="RATES & RESERVATIONS" />
            <NavItem href="/#services" label="SERVICES" />
            <NavItem href="/#locations" label="LOCATIONS" />
          </div>
          
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

interface NavItemProps {
  href: string;
  label: string;
  active?: boolean;
  hasSubmenu?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, active, hasSubmenu }) => {
  return (
    <Link 
      to={href} 
      className={`text-sm font-medium py-2 px-3 flex items-center transition duration-300 ${active ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}
    >
      {label}
      {hasSubmenu && <ChevronDown className="ml-1 h-4 w-4" />}
    </Link>
  );
};

export default Navbar;