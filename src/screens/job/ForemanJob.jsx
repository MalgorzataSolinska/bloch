import { Helmet } from 'react-helmet';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ForemanJob = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Brygadzista do obróbki stali i betonu | Bloch</title>
        <meta name='description' content='Praca dla brygadzistów w obróbce powierzchniowej stali i betonu w Danii.' />
      </Helmet>
      <div className='pt-24'>
        <div>
          <button
            onClick={() => navigate('/job-offers', { state: { scrollTo: 'oferty-pracy' } })}
            className='flex items-center text-[#2f4183] hover:text-[#4bb9e5] transition'
          >
            <ChevronLeft size={24} />
            <span className='ml-2 font-semibold'>Wróć do ofert</span>
          </button>
        </div>
        <div className='p-10 max-w-3xl mx-auto'>
          <h1 className='text-4xl font-bold text-[#2f4183] mb-6 text-center'>
            Brygadzista do obróbki powierzchniowej stali i betonu
          </h1>
          <p className='text-lg text-gray-700 mb-6 text-center'>
            Poszukujemy brygadzistów do zarządzania zespołem przy obróbce powierzchniowej dużych konstrukcji betonowych
            i stalowych na jednym z największych placów budowy w Danii na okres 3-5 lat.
          </p>

          <h2 className='text-2xl font-semibold text-[#2f4183] mt-6 mb-3'>Wymagania:</h2>
          <ul className='list-disc list-inside text-gray-700 space-y-2'>
            <li>Profesjonalizm, respektowanie przepisów, zasad bezpieczeństwa i wymagań jakościowych</li>
            <li>Dobra znajomość procesów obróbki powierzchniowej stali i betonu</li>
            <li>Doświadczenie w zarządzaniu zespołem 4–6 osobowym</li>
            <li>Umiejętność kontroli jakości i samokontroli wykonanych prac</li>
            <li>Monitorowanie przestrzegania zasad bezpieczeństwa na budowie</li>
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
              href='https://www.aplikuj.pl/oferta/2798858/brygadzisci-i-specjalisci-do-obrobki-powierzchniowej-stali-i-betonu-umowa-o-prace-bloch-spolka-z-ograniczona-odpowiedzialnoscia'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-[#2f4183] text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-[#4bb9e5] transition'
            >
              Przejdź na Aplikuj.pl
            </a>
          </div>
        </div>
        <div className='w-full'>
          <img src='/images/siteWorkers.png' alt='SiteWorkers' className=' max-w-full h-auto shadow-md rounded-md' />
        </div>
      </div>
    </>
  );
};

export default ForemanJob;
