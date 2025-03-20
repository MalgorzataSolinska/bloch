import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



const jobOffers = [
  {
    title: 'Specjalista do obróbki powierzchniowej stali i betonu',
    description:
      'Poszukujemy specjalistów do obróbki powierzchniowej dużych konstrukcji betonowych i stalowych na jednym z największych placów budowy w Danii.',
    link: '/job/specialist',
  },
  {
    title: 'Brygadzista do obróbki powierzchniowej stali i betonu',
    description:
      'Szukamy brygadzistów do zarządzania zespołem 4–6 osobowym w zakresie obróbki powierzchniowej konstrukcji betonowych i stalowych.',
    link: '/job/foreman',
  },
];



const JobOffers = () => {
  const location = useLocation();
  useEffect(() => {
    const scrollTarget = location.state?.scrollTo || 'default-section';
    const section = document.getElementById(scrollTarget);
    if (section) {
      // Uzyskanie pozycji sekcji względem całej strony
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
  
      // Przewijanie do sekcji z offsetem 10px
      window.scrollTo({
        top: sectionTop - 30, // Odjęcie 10px od pozycji, aby unikać przysłonięcia
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Oferty pracy w Danii | Bloch</title>
        <meta
          name='description'
          content='Sprawdź aktualne oferty pracy w Danii! Znajdź zatrudnienie zgodne ze swoimi kwalifikacjami.'
        />
      </Helmet>

      <div className='pt-20'>
        <section className='lg:w-fit h-fit p-10 sm:p-6 md:p-12 mb-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 items-center'>
            <div className='text-center md:text-left'>
              <h1 className='text-4xl lg:text-5xl font-bold text-[#2f4183] mb-6 leading-tight'>
                Praca w Danii – Dołącz do Nas!
              </h1>
              <p className='md:text-lg lg:text-xl text-[#2f4183] mb-6'>
                Szukamy wykwalifikowanych specjalistów do pracy w Danii. Oferujemy legalne zatrudnienie, atrakcyjne
                warunki oraz wsparcie w procesie rekrutacji.
              </p>
              <div className='flex justify-center md:justify-start'>
                <Link to='/contact'>
                  <button className='bg-[#2f4183] text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-[#4bb9e5] transition duration-300'>
                    Skontaktuj się z nami
                  </button>
                </Link>
              </div>
            </div>

            <div className='flex justify-center'>
              <img src='/images/site.png' alt='Praca w Danii' className='rounded-lg shadow-xl max-w-full h-auto' />
            </div>
          </div>
        </section>

        {/* Kafelki ofert pracy */}
        <section id="oferty-pracy" className='bg-white p-10 sm:p-6 md:p-12 mb-10 text-center'>
          <h2 className='text-3xl font-semibold text-[#2f4183] mb-6'>Aktualne oferty pracy</h2>
          <div className='grid grid-cols-1  gap-6'>
            {jobOffers.map((job, index) => (
              <Link
                key={index}
                to={job.link}
                className='block bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-x-105 transition duration-300'
              >
                <h3 className='text-2xl font-bold text-[#2f4183] mb-2'>{job.title}</h3>
                <p className='text-gray-700'>{job.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className='text-center'>
          <h2 className='text-3xl font-semibold text-[#2f4183] mb-6'>Gotowy na nową pracę?</h2>
          <p className='text-lg text-gray-700 mb-6'>
            Skontaktuj się z nami – pomożemy Ci znaleźć zatrudnienie w Danii!
          </p>
          <Link to='/contact'>
            <button className='bg-[#2f4183] text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-[#4bb9e5] transition duration-300'>
              Aplikuj teraz
            </button>
          </Link>
        </section>
      </div>
    </>
  );
};

export default JobOffers;
