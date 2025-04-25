import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className='mt-10 bg-gray-900 p-6 sm:p-10 md:p-12 text-white'>
      <div className='max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-[250px_1fr_1fr]'>
        {/* Logo i firma */}
        <div className='flex flex-col items-center sm:items-start min-w-0'>
          <Link to='/'>
            <Logo invert={true} text={false} className='w-16 h-16 sm:w-24 sm:h-24 mb-2' />
          </Link>
          <p className='font-bold text-base sm:text-lg'>Bloch Sp. z o.o.</p>
          <p className='text-gray-300'>NIP: 6751803754</p>
        </div>

        {/* Nawigacja */}
        <div className='flex flex-col items-center sm:items-start min-w-0'>
          <p className='font-semibold text-base sm:text-lg mb-2'>Nawigacja</p>
          <Link to='/' className='text-gray-300 hover:underline mb-1'>
            Strona główna
          </Link>
          <Link to='/team' className='text-gray-300 hover:underline mb-1'>
            Zespół
          </Link>
          <Link to='/for-companies' className='text-gray-300 hover:underline mb-1'>
            Dla firm
          </Link>

          <Link to='/job-offers' className='text-gray-300 hover:underline mb-1'>
            Praca w Danii
          </Link>
          <Link to='/contact' className='text-gray-300 hover:underline'>
            Kontakt
          </Link>
        </div>

        {/* Kontakt */}
        <div className='flex flex-col items-center sm:items-start min-w-0'>
          <p className='font-semibold text-base sm:text-lg mb-2'>Kontakt EN</p>
          <p className='flex items-center mb-1'>
            <FaEnvelope className='mr-2' />
            <a href='mailto:jakob@bloch.com.pl' className='text-gray-300 hover:underline break-all'>
              jakob@bloch.com.pl
            </a>
          </p>
          <p className='flex items-center'>
            <FaPhone className='mr-2' />
            <a href='tel:+4528719175' className='text-gray-300 hover:underline'>
              +45 28 71 91 75
            </a>
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className='border-t border-gray-700 my-6'></div>

      {/* Copyright */}
      <div className='text-left text-xs text-gray-400 p-2'>
        COPYRIGHT &copy; {new Date().getFullYear()} Created by{' '}
        <a
          href='https://github.com/MalgorzataSolinska'
          className='hover:underline'
          target='_blank'
          rel='noopener noreferrer'
        >
          MalgorzataSolinska
        </a>
      </div>
    </footer>
  );
};

export default Footer;
