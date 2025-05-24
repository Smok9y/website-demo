import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="text-white font-bold flex flex-col">
        <span className="text-xl tracking-wider">EXCLUSIVE</span>
        <span className="text-xs tracking-widest text-yellow-400 -mt-1">CAR RENTAL</span>
      </div>
    </div>
  );
};

export default Logo;