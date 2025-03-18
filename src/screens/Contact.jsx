
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='pt-20'>
      {/* Sekcja Hero - biały background, obrazek po prawej */}
      <section className=' p-10 sm:p-6 md:p-12 mb-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
          {/* Tekst po lewej */}
          <div className='text-center md:text-left'>
            <h1 className='text-4xl font-bold text-[#6A8CD3] mb-6 leading-tight md:mr-8'>
              Skontaktuj się z nami
            </h1>
            <p className='text-lg lg:text-xl text-gray-700 mb-4 '>
              Jesteśmy do dyspozycji od poniedziałku do piątku od 9:00 do 16:00
            </p>

            <p className='text-lg lg:text-xl text-gray-700 mb-4'>
              <strong>Kontakt w języku polskim - Iana </strong>
              <p className='flex items-center justify-center md:justify-start'>
                <FaEnvelope className='mr-2' />
                <a href='mailto:iana@bloch.com.pl' className=' hover:underline  '>
                  iana@bloch.com.pl
                </a>
              </p>
              <p className='flex items-center mb-2 justify-center md:justify-start'>
                <FaPhone className='mr-2' />
                <a href='tel:+48502765640' className=' hover:underline text-center '>
                  502 765 640
                </a>
              </p>
            </p>
            <p className='text-lg lg:text-xl text-gray-700 mb-4 justify-center'>
              <strong>Kontakt w języku angielskim - Jakob </strong>
              <p className='flex items-center justify-center md:justify-start'>
                <FaEnvelope className='mr-2' />
                <a href='mailto:iana@bloch.com.pl' className=' hover:underline'>
                  jakob@bloch.com.pl
                </a>
              </p>
            </p>
          </div>

          {/* Zdjęcie po prawej */}
          <div>
            <img src='/images/contact.png' alt='Zespół BLOCH' className='rounded-lg shadow-lg' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
