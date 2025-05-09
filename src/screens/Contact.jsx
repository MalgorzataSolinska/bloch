import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Kontakt | Bloch</title>
        <meta name='description' content='Legalne zatrudnienie w Danii. Skontaktuj się z nami!' />
      </Helmet>
      <div className='pt-20'>
        <section className='p-10 sm:p-6 md:p-12 mb-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
            <div className='text-center md:text-left'>
              <h1 className='text-4xl lg:text-5xl font-bold text-[#6A8CD3] mb-6 leading-tight md:mr-8'>
                Skontaktuj się z nami
              </h1>
              <p className='text-lg lg:text-xl text-gray-700 mb-4'>
                Jesteśmy do dyspozycji od poniedziałku do piątku od 9:00 do 16:00
              </p>

              
        

              <div>
                <h2 className='text-xl font-semibold text-gray-800 mb-2'>Kontakt w języku angielskim – Jakob</h2>
                <div className='flex items-center justify-center md:justify-start mb-2'>
                  <FaEnvelope className='mr-2 text-[#6A8CD3]' />
                  <a href='mailto:jakob@bloch.com.pl' className='hover:underline text-gray-700'>
                    jakob@bloch.com.pl
                  </a>
                  
                  </div>
                  <div className='flex items-center justify-center md:justify-start'>
                    <FaPhone className='mr-2 text-[#6A8CD3]' />
                    <a href='tel:+4528719175' className='text-gray-700 hover:underline'>
                      +45 28 71 91 75
                    </a>
                  </div>
              
              </div>
            </div>

            <div className='flex justify-center'>
              <img src='/images/contact.png' alt='Zespół BLOCH' className='rounded-lg shadow-lg max-w-full h-auto' />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
