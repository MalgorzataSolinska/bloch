import React from 'react';

const Logo = ({ invert = false, text = true, className = '' }) => {
  return (
    <div className={`flex flex-row items-center gap-2 justify-center ${className}`}>
      <img 
        src='/logo_przezroczyste.png' 
        alt='Logo' 
        className={`transition-all duration-200 ${invert ? 'invert' : ''}`} 
      />
      {/* Sprawdzamy, czy "text" jest puste, jeśli tak, wyświetlamy tekst "BLOCH" */}
      {text && (
        <span className={`text-xs font-medium leading-none mt-1 ${invert ? 'text-white' : 'text-gray-900'}`}>
          BLOCH
        </span>
      )}
    </div>
  );
}

export default Logo;
