import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ForCompanies = () => {
  return (
    <>
      <Helmet>
        <title>Rekrutacja pracowników | Bloch</title>
        <meta
          name='description'
          content='Szukasz pracowników do swojej firmy? Oferujemy profesjonalną rekrutację polskich specjalistów do pracy w Danii.'
        />
      </Helmet>

      <div className='pt-20'>
        <section className='lg-w-fit h-fit p-10 sm:p-6 md:p-12  bg-[#f4f4f4]'>
          <div className='grid grid-cols-1 gap-10 items-center'>
            <div className='text-center md:text-left'>
              <h1 className='text-4xl lg:text-5xl font-bold text-[#212b9e] mb-6 leading-tight'>Dla firm </h1>
              <p className='text-lg md:text-lg lg:text-xl text-gray-700 mb-6 md:text-justify'>
                Szukasz wykwalifikowanych pracowników do swojej firmy? <br /> Współpracuj z nami i zyskaj dostęp do
                najlepszych specjalistów!
              </p>
            </div>
          </div>
        </section>

        <section className='py-16 px-6 md:px-12 lg:px-20 '>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center '>
            <div>
              <h2 className='text-3xl font-semibold text-[#212b9e] mb-6'>Szukamy firm, które:</h2>
              <ul className='text-lg text-gray-700 space-y-4 list-disc list-inside'>
                <li> Oferują wynagrodzenie adekwatne do kwalifikacji pracowników</li>
                <li> Stawiają na rozwój i szkolenia swoich pracowników</li>
                <li> Dbają o bezpieczeństwo w miejscu pracy</li>
                <li> Zapewniają dobre warunki pracy</li>
                <li> Gwarantują dobre warunki zakwaterowania w Danii</li>
              </ul>
            </div>

            <div className='flex justify-center'>
              <img
                src='/images/forcompanies.png'
                alt='Współpraca z firmami'
                className='rounded-lg shadow-xl max-w-full h-auto'
              />
            </div>
          </div>
        </section>
      

        <section className='bg-white py-16 text-center text-[#212b9e] px-6'>
          <h2 className='text-3xl font-semibold mb-6'>Zostań naszym partnerem!</h2>
          <p className='text-lg max-w-2xl mx-auto mb-6'>
          Jeśli Twoja firma spełnia powyższe wymagania i szuka wykwalifikowanych specjalistów, skontaktuj się z nami!

          </p>
          <Link to='/Contact'>
            <button className='bg-white border-2 border-[#212b9e] text-[#212b9e] py-3 px-6 rounded-full text-lg font-semibold hover:bg-[#343b89] hover:text-white transition duration-300'>
              Skontaktuj się z nami
            </button>
          </Link>
        </section>
      </div>
    </>
  );
};

export default ForCompanies;
