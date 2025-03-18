import { Menu, X } from 'lucide-react'; // Ikony z shadcn/ui (lucide-react)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Stan dla mobilnego menu

  return (
    <nav className='w-full p-2 flex justify-between items-center fixed top-0 left-0 right-0 z-50 bg-white shadow-lg  '>
      {/* Logo po lewej stronie */}
      <div className='flex items-center ml-8'>
        <Link to='/'>
          <Logo className='w-14 h-14' />
        </Link>
      </div>
      {/* Desktopowe menu */}
      <div className='hidden md:flex gap-6 text-s font-light mr-4'>
        <Link to='/Team' className='hover:underline'>
          ZESPÓŁ
        </Link>
        <Link to='/ForCompanies' className='hover:underline'>
          DLA FIRM
        </Link>
        <Link to='/JobOffers' className='hover:underline'>
          PRACA W DANII
        </Link>
        <Link to='/Contact' className='hover:underline'>
          KONTAKT
        </Link>
      </div>
      {/* Ikona hamburger menu na mobile */}
      <button className='md:hidden p-2' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      {/* Mobilne menu */}
      {isOpen && (
        <div className='absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center md:hidden text-s font-light'>
          <Link to='/team' className='block w-full text-center py-3 hover:bg-gray-100' onClick={() => setIsOpen(false)}>
            ZESPÓŁ
          </Link>
          <Link
            to='/ForCompanies'
            className='block w-full text-center py-3 hover:bg-gray-100'
            onClick={() => setIsOpen(false)}
          >
            DLA FIRM
          </Link>
          <Link
            to='/JobOffers'
            className='block w-full text-center py-3 hover:bg-gray-100'
            onClick={() => setIsOpen(false)}
          >
            PRACA W DANII
          </Link>
          <Link
            to='/contact'
            className='block w-full text-center py-3 hover:bg-gray-100'
            onClick={() => setIsOpen(false)}
          >
            KONTAKT
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
