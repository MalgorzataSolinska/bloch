import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Nasz Zespół | Bloch</title>
        <meta
          name='description'
          content='Poznaj nasz zespół! Specjaliści z doświadczeniem pomogą Ci w znalezieniu pracy w Danii.'
        />
      </Helmet>

      <div className='pt-20'>
        <section className=' lg-w-fit h-fit p-10 sm:p-6 md:p-12 '>
          <div className='grid grid-cols-1  gap-10  '>
            <div className='text-center md:text-left '>
              <h1 className='text-4xl  lg:text-5xl  font-bold text-[#3465CC] mb-6 leading-tight md:mr-8 text-center md:text-left '>
                Nasz zespół
              </h1>
              <p className='md:text-md lg:text-xl text-gray-700 mb-6 text-justify'>
                Poświęcamy czas na słuchanie i zrozumienie potrzeb oraz aspiracji ludzi, aby móc je spełnić. Współpraca
                i integracja są podstawą naszego podejścia – wspólnie tworzymy rozwiązania, uczymy się od siebie
                nawzajem i dzielimy się wiedzą oraz doświadczeniem.
              </p>
            </div>

            <div className='flex justify-center'>
              <img src='/images/team.png' alt='team BLOCH' className='rounded-lg shadow-xl w-auto md:max-w-screen-sm' />
            </div>
          </div>
        </section>

        <section className='bg-white p-10 sm:p-6 md:p-12  text-justify'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 '>
            <div>
              <h2 className='text-3xl font-semibold text-[#3465CC] mb-4'>Jakob</h2>
              <p className='text-l lg:text-xl text-gray-700 mb-4'>
                Ma 25 lat doświadczenia jako przedsiębiorca w Danii, zatrudniający polskich pracowników.
              </p>
              <p className='text-l lg:text-xl text-gray-700 mb-4'>
                Jest magistrem ekonomii Uniwersytetu w Kopenhadze i posiada doświadczenie w finansach oraz administracji
                publicznej.
              </p>
            </div>

            <div className='flex justify-center'>
              <img src='/images/jakob.png' alt='Jakob Bloch' className='m-5 rounded-lg shadow-xl max-w-xs max-h-xs' />
            </div>
          </div>
        </section>
        

        <section className='bg-[#f4f4f4] p-10 text-center'>
          <h2 className='text-3xl font-semibold text-[#3465CC] mb-6'>Masz pytania? </h2>
          <p className='text-lg text-gray-700 mb-6'>Jesteśmy tutaj, aby Ci pomóc. Napisz do nas!</p>

          <Link to='/Contact'>
            <button className='bg-[#3465CC] text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-[#4bb9e5] transition duration-300'>
              Skontaktuj się z nami
            </button>
          </Link>
        </section>
      </div>
    </>
  );
};

export default Team;
