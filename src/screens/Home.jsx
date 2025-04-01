import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Bloch - Praca w Danii</title>
        <meta
          name='description'
          content='Szukasz pracy w Danii? Bloch pomoże Ci znaleźć legalne zatrudnienie dopasowane do Twoich kwalifikacji.'
        />
      </Helmet>

      <div className='pt-20'>
        <section className=' lg-w-fit h-fit p-10 sm:p-6 md:p-12 mb:0 sm:mb-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
            <div className='text-center md:text-left'>
              <h1 className='text-4xl lg:text-5xl font-bold text-[#315F81] mb-6 leading-tight md:mr-8'>
                Twoja Przyszłość Zaczyna się Tutaj
              </h1>
              <p className='md:text-md lg:text-xl  text-[#315F81] mb-6'>
                Szukamy specjalistów do pracy w Danii <br /> Dołącz do zespołu i rozwijaj swoją karierę
              </p>

              <div className='flex justify-center md:justify-start flex-col md:flex-col lg:flex-row gap-3'>
                <Link to='/Team'>
                  <button className='bg-[#315F81] text-white py-3 px-6 rounded-full text-l font-semibold hover:bg-[#5986A3] transition duration-300 w-fit'>
                    Dowiedz się więcej
                  </button>
                </Link>
                <div className='justify-center md:justify-start' >
                  <button
                    onClick={() => navigate('/joboffers', { state: { scrollTo: 'oferty-pracy' } })}
                    className=' bg-transparent border-2 border-[#315F81] text-[#315F81] py-3 px-6 rounded-full text-l font-semibold hover:bg-[#315F81] hover:text-white transition duration-300 w-fit '
                  >
                    Aktualne oferty pracy
                  </button>
                </div>
              </div>
            </div>

            <div className='flex justify-center'>
              <img
                src='/images/hero.png'
                alt='Zespół BLOCH'
                className=' max-w-full h-auto bg-white shadow-md'
              />
            </div>
          </div>
        </section>

        <section className='bg-white p-10 sm:p-6 md:p-12 mb-8 text-justify'>
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

            <div className='flex justify-center'>
              <Link to='/Team'>
                <button className='bg-transparent border-2 border-[#315F81] text-[#315F81] py-3 px-4 rounded-full text-l font-semibold hover:bg-[#315F81] hover:text-white transition duration-300 w-fit '>
                  Poznaj nasz zespół
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className=' p-10 text-center'>
          <h2 className='text-3xl font-semibold text-[#315F81] mb-6'>Masz pytania? </h2>
          <p className='text-lg text-gray-700 mb-6'>Jesteśmy tutaj, aby Ci pomóc. Napisz do nas!</p>

          <Link to='/Contact'>
            <button className='bg-[#315F81] text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-[#5986A3] transition duration-300'>
              Skontaktuj się z nami
            </button>
          </Link>
        </section>
      </div>
    </>
  );
};

export default Home;
