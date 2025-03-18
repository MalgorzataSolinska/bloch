import { Link } from 'react-router-dom';

const JobOffers = () => {
  return (
    <div className='pt-20'>
      {/* Sekcja Hero */}
      <section className='lg-w-fit h-fit p-10 sm:p-6 md:p-12 mb-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
          {/* Tekst po lewej */}
          <div className='text-center md:text-left'>
            <h1 className='text-5xl md:text-4xl lg:text-6xl font-bold text-[#2f4183] mb-6 leading-tight'>
              Praca w Danii – Dołącz do Nas!
            </h1>
            <p className='md:text-md lg:text-xl text-[#2f4183] mb-6'>
              Szukamy wykwalifikowanych specjalistów do pracy w Danii. Oferujemy legalne zatrudnienie, atrakcyjne
              warunki oraz wsparcie w procesie rekrutacji.
            </p>

            {/* Przyciski */}
            <div className='flex justify-center md:justify-start md:flex-col lg:flex-row gap-3'>
              <Link to='/contact'>
                <button className='bg-[#2f4183] text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-[#4bb9e5] transition duration-300'>
                  Skontaktuj się z nami
                </button>
              </Link>
            </div>
          </div>

          {/* Obrazek po prawej */}
          <div className='flex justify-center'>
            <img src='/images/site.png' alt='Praca w Danii' className='rounded-lg shadow-xl max-w-full h-auto' />
          </div>
        </div>
      </section>

      {/* Wymagania */}
      <section className='bg-white p-10 sm:p-6 md:p-12 mb-20 text-justify'>
        <h2 className='text-3xl font-semibold text-[#2f4183] mb-6 text-center'>Kogo szukamy?</h2>
        <div className='grid grid-cols-1 gap-10 items-center'>
          {/* Lista wymagań */}
          <div>
            <ul className='list-disc list-inside text-lg lg:text-xl text-gray-700 space-y-4'>
              <li>Masz doświadczenie i udokumentowane kwalifikacje zgodne z naszymi wymaganiami?</li>
              <li>Jesteś rzetelny, sumienny i traktujesz pracę powaznie?</li>
              <li>Jesteś ambitny i wykonujesz powierzoną pracę na najwyższym poziomie?</li>
              <li>Przestrzegasz zasad na placu budowy i zachowujesz bezpieczeństwo?</li>
            </ul>
          </div>
          <div className='flex justify-center gap-3'>
            <Link to=''>
              <button className='bg-transparent border-2 border-[#2f4183] text-[#2f4183] py-3 px-6 rounded-full text-lg font-semibold hover:bg-[#2f4183] hover:text-white transition duration-300'>
                Sprawdź oferty pracy
              </button>
            </Link>
          </div>

          {/* Zdjęcie po prawej */}
          <div className='flex justify-center'>
            <img
              src='/images/siteworkers.png'
              alt='Pracownicy w Danii'
              className='rounded-lg shadow-lg max-w-full h-auto'
            />
          </div>
        </div>
      </section>

      {/* Sekcja Kontaktowa */}
      <section className='bg-[#f4f4f4] p-10 text-center'>
        <h2 className='text-3xl font-semibold text-[#2f4183] mb-6'>Gotowy na nową pracę?</h2>
        <p className='text-lg text-gray-700 mb-6'>Skontaktuj się z nami – pomożemy Ci znaleźć zatrudnienie w Danii!</p>

        {/* Przycisk kontaktowy */}
        <Link to='/contact'>
          <button className='bg-[#2f4183] text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-[#4bb9e5] transition duration-300'>
            Aplikuj teraz
          </button>
        </Link>
      </section>
    </div>
  );
};

export default JobOffers;
