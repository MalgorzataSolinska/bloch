import { Link } from 'react-router-dom'; // Używamy Link z react-router-dom do nawigacji
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className='mt-10 bg-gray-900 p-8 sm:p-10 md:p-12 text-white'>
      <div className='w-full max-w-6xl mx-auto flex flex-wrap justify-between items-start sm:items-center flex-col sm:flex-row'>
        {/* Lewa kolumna - Logo i firma */}
        <div className='w-full sm:w-1/3 md:w-1/3 flex flex-col sm:flex-col items-center sm:items-start mb-6'>
          <Link to='/'>
            <div className='flex justify-center items-center mb-0 sm:mb-2'>
              {/* Powiększamy logo */}
              <Logo invert={true} text={false} className='w-24 h-24 sm:w-32 sm:h-32' />
            </div>
          </Link>

          {/* Zmiana wyrównania podpisu w zależności od rozmiaru ekranu */}
          <div className='flex flex-col items-center sm:items-start text-center sm:text-left'>
            <p className='font-bold text-lg sm:text-xl md:text-lg'>Bloch Sp. z o.o.</p>
            <p className='sm:text-sm md:text-base font-light'>NIP: 6751803754</p>
          </div>
        </div>

        {/* Środkowa kolumna - Kontakt PL */}
        <div className='w-full sm:w-1/3 md:w-1/3 flex flex-col items-center sm:items-start mb-10 sm:mb-0'>
          <p className='font-normal text-lg sm:text-xl md:text-lg text-center sm:text-left mb-4'>Kontakt PL</p>
          <p className='flex items-center'>
            <FaEnvelope className='mr-2' />
            <a href='mailto:iana@bloch.com.pl' className='text-gray-300 hover:underline'>
              iana@bloch.com.pl
            </a>
          </p>
          <p className='flex items-center mb-2'>
            <FaPhone className='mr-2' />
            <a href='tel:+48502765640' className='text-gray-300 hover:underline'>
              +48 502 765 640
            </a>
          </p>
        </div>

        {/* Prawa kolumna - Kontakt EN */}
        <div className='w-full sm:w-1/3 md:w-1/3 flex flex-col items-center sm:items-start mb-10 sm:mb-0'>
          <p className='font-normal text-lg sm:text-xl md:text-lg text-center sm:text-left mb-4'>Kontakt EN</p>
          <p className='flex items-center'>
            <FaEnvelope className='mr-2' />
            <a href='mailto:jakob@bloch.com.pl' className='text-gray-300 hover:underline'>
              jakob@bloch.com.pl
            </a>
          </p>
          <p className='flex items-center mb-2'>
            <FaPhone className='mr-2' />
            <a href='tel:+4528719175' className='text-gray-300 hover:underline'>
              +45 28 71 91 75
            </a>
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className='border-t border-gray-200 my-5'></div>

      {/* Stopka z Copyright */}
      <div className='flex justify-between items-center mt-4'>
        <p className='text-sm text-gray-400'>
          COPYRIGHT &copy; {new Date().getFullYear()} Created by{' '}
          <a
            href='https://github.com/MalgorzataSolinska'
            className=' text-gray-400 hover:underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            MalgorzataSolinska
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
