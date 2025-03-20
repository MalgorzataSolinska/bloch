import { Helmet } from 'react-helmet';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SpecialistJob = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Specjalista do obróbki stali i betonu | Bloch</title>
        <meta name='description' content='Praca dla specjalistów w obróbce powierzchniowej stali i betonu w Danii.' />
      </Helmet>
      <div className='pt-24'>
        <div>
          <button
            onClick={() => navigate('/joboffers', { state: { scrollTo: 'oferty-pracy' } })}
            className='flex items-center text-[#2f4183] hover:text-[#4bb9e5] transition'
          >
            <ChevronLeft size={24} />
            <span className='ml-2 font-semibold'>Wróć do ofert</span>
          </button>
        </div>
        <div className='p-10 max-w-3xl mx-auto '>
          <h1 className='text-4xl font-bold text-[#2f4183] mb-6 text-center'>
            Specjalista do obróbki powierzchniowej stali i betonu
          </h1>
          <p className='text-lg text-gray-700 mb-6 text-center'>
            Poszukujemy specjalistów do obróbki powierzchniowej dużych konstrukcji betonowych i stalowych na jednym z
            największych placów budowy w Danii. Potrzebujemy 20-25 pracowników na okres 3-5 lat.
          </p>

          <h2 className='text-2xl font-semibold text-[#2f4183] mt-6 mb-3'>Wymagania:</h2>
          <ul className='list-disc list-inside text-gray-700 space-y-2'>
            <li>Profesjonalizm, respektowanie przepisów, zasad bezpieczeństwa i wymagań jakościowych</li>
            <li>Doświadczenie w piaskowaniu elementów betonowych i konstrukcji stalowych</li>
            <li>Znajomość parametrów chropowatości powierzchni, np. SA 2,5</li>
            <li>Doświadczenie w malowaniu i zabezpieczaniu powierzchni</li>
            <li>Znajomość grubości warstw powłok</li>
            <li>Wiedza na temat przedłużania trwałości konstrukcji stalowych</li>
            <li>Mile widziana znajomość wdrażania nowych systemów malarskich na stal</li>
          </ul>

          <h2 className='text-2xl font-semibold text-[#2f4183] mt-6 mb-3'>Oferujemy:</h2>
          <ul className='list-disc list-inside text-gray-700 space-y-2'>
            <li>Sprawnie funkcjonujące środowisko pracy</li>
            <li>Zakwaterowanie w dobrych warunkach i rozsądnej cenie</li>
            <li>Możliwość zdobycia doświadczenia na jednym z największych projektów budowlanych w Europie</li>
            <li>Możliwość awansu dla zaangażowanych pracowników</li>
            <li>Atrakcyjne wynagrodzenie zależne od kwalifikacji</li>
          </ul>
          <div className='mt-10 text-center mb-12'>
            <a
              href='/contact'
              className='bg-[#2f4183] text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-[#4bb9e5] transition'
            >
              Przejdź na Aplikuj.pl
            </a>
          </div>
          <div className='w-full'>
            <img src='/images/siteWorkers.png' alt='SiteWorkers' className=' max-w-full h-auto shadow-md rounded-md' />
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialistJob;
