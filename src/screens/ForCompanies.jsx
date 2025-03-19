import { Link } from 'react-router-dom';

const ForCompanies = () => {
  return (
    <div className='pt-20'>
      {/* Sekcja nagłówka */}
      <section className='lg-w-fit h-fit p-10 sm:p-6 md:p-12  bg-[#f4f4f4]'>
        <div className='grid grid-cols-1 gap-10 items-center'>
          <div className='text-center md:text-left'>
            <h1 className='text-4xl lg:text-5xl font-bold text-[#8cc4df] mb-6 leading-tight'>Dla firm </h1>
            <p className='md:text-lg lg:text-xl text-gray-700 mb-6 text-justify'>
              Szukasz wykwalifikowanych pracowników do swojej firmy? <br /> Współpracuj z nami i zyskaj dostęp do
              najlepszych specjalistów!
            </p>
          </div>
        </div>
      </section>

      {/* Sekcja z wymaganiami dla firm */}
      <section className='py-16 px-6 md:px-12 lg:px-20 '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center '>
          {/* Tekst */}
          <div>
            <h2 className='text-3xl font-semibold text-[#8cc4df] mb-6'>Szukamy firm, które:</h2>
            <ul className='text-lg text-gray-700 space-y-4 list-disc list-outside'>
              <li> Oferują wynagrodzenie adekwatne do kwalifikacji pracowników</li>
              <li> Stawiają na rozwój i szkolenia swoich pracowników</li>
              <li> Dbają o bezpieczeństwo w miejscu pracy</li>
              <li> Zapewniają dobre warunki pracy</li>
              <li> Gwarantują dobre warunki zakwaterowania w Danii</li>
            </ul>
            <p className='mt-6 text-lg text-gray-700'>
              Jeśli Twoja firma spełnia powyższe wymagania i szuka wykwalifikowanych specjalistów, skontaktuj się z
              nami!
            </p>
          </div>

          {/* Zdjęcie po prawej */}
          <div className='flex justify-center'>
            <img
              src='/images/forcompanies.png'
              alt='Współpraca z firmami'
              className='rounded-lg shadow-xl max-w-full h-auto'
            />
          </div>
        </div>
      </section>

      {/* Sekcja kontaktowa */}
      <section className='bg-[#8cc4df] py-16 text-center text-white'>
        <h2 className='text-3xl font-semibold mb-6'>Zostań naszym partnerem!</h2>
        <p className='text-lg max-w-2xl mx-auto mb-6'>
          Skontaktuj się z nami i dowiedz się, jak możemy pomóc w znalezieniu najlepszych specjalistów dla Twojej firmy.
        </p>
        <Link to='/Contact'>
          <button className='bg-white text-[#8cc4df] py-3 px-6 rounded-full text-lg font-semibold hover:bg-[#b7ecff] hover:text-white transition duration-300'>
            Skontaktuj się z nami
          </button>
        </Link>
      </section>
    </div>
  );
};

export default ForCompanies;
