import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='pt-20'>
      {/* Sekcja Hero - biały background, obrazek po prawej */}
      <section className=' lg-w-fit h-fit p-10 sm:p-6 md:p-12 mb:0 sm:mb-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 items-center'>
          {/* Tekst po lewej */}
          <div className='text-center md:text-left'>
            <h1 className='text-4xl lg:text-6xl font-bold text-[#63d4ff] mb-6 leading-tight md:mr-8'>
              Twoja Przyszłość Zaczyna się Tutaj
            </h1>
            <p className='md:text-md lg:text-xl  text-[#63d4ff] mb-6'>
              Szukamy specjalistów do pracy w Danii <br /> Dołącz do zespołu i rozwijaj swoją karierę
            </p>

            {/* Dodajemy przyciski */}
            <div className='flex justify-center md:justify-start flex-col md:flex-col lg:flex-row gap-3'>
              <Link to='/Team'>
                <button className='bg-[#63d4ff] text-white py-3 px-6 rounded-full text-l font-semibold hover:bg-[#4bb9e5] transition duration-300 w-fit'>
                  Dowiedz się więcej
                </button>
              </Link>
              <Link to='/Contact'>
                <button className='bg-transparent border-2 border-[#63d4ff] text-[#63d4ff] py-3 px-6 rounded-full text-l font-semibold hover:bg-[#63d4ff] hover:text-white transition duration-300 w-fit '>
                  Skontaktuj się z nami
                </button>
              </Link>
            </div>
          </div>

          {/* Zdjęcie po prawej */}
          <div className='flex justify-center'>
            <img src='/images/hero.png' alt='Zespół BLOCH' className='rounded-lg shadow-xl max-w-full h-auto hidden sm:block' />
          </div>
        </div>
      </section>

      <section className='bg-white p-10 sm:p-6 md:p-12 mb-20 text-justify'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 items-center'>
          <div>
            <img src='/images/zespol.png' alt='Zespół BLOCH' className='rounded-lg shadow-lg' />
          </div>

          <div className='flex flex-col justify-between h-full'>
            {/* Tekst */}
            <div>
              <p className='text-l lg:text-xl text-gray-700 mb-4'>
                <strong>BLOCH</strong> to polska agencja rekrutacyjna specjalizująca się w pozyskiwaniu
                wykwalifikowanych fachowców dla firm w Danii.
              </p>
              <p className='text-l lg:text-xl text-gray-700 mb-4'>
                Wspieramy osoby poszukujące pracy w zdobywaniu wymarzonych stanowisk i rozwijaniu kompetencji
                zawodowych.
              </p>
              <p className='text-l lg:text-xl text-gray-700 mb-6'>
                Oferujemy kompleksowe rozwiązania dla firm – od rekrutacji, przez szkolenia i doradztwo, aż po coaching
                i outplacement.
              </p>
            </div>

            {/* Przycisk na dole */}
            <Link to='/Team'>
              <button className='bg-transparent border-2 border-[#63d4ff] text-[#63d4ff] py-3 px-4 rounded-full text-l font-semibold hover:bg-[#63d4ff] hover:text-white transition duration-300 w-fit mx-auto'>
                Poznaj nasz zespół
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sekcja Kontaktowa na dole */}
      <section className='bg-[#f4f4f4] p-10 text-center'>
        <h2 className='text-3xl font-semibold text-[#63d4ff] mb-6'>Masz pytania? Skontaktuj się z nami!</h2>
        <p className='text-lg text-gray-700 mb-6'>Jesteśmy tutaj, aby Ci pomóc. Napisz do nas!</p>

        {/* Przycisk kontaktowy */}
        <Link to='/Contact'>
          <button className='bg-[#63d4ff] text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-[#4bb9e5] transition duration-300'>
            Skontaktuj się z nami
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
