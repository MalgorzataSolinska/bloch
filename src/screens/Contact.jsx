import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Sekcja Hero */}
      <section className="p-10 sm:p-6 md:p-12 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Tekst po lewej */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-[#6A8CD3] mb-6 leading-tight md:mr-8">
              Skontaktuj się z nami
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 mb-4">
              Jesteśmy do dyspozycji od poniedziałku do piątku od 9:00 do 16:00
            </p>
            

            {/* Kontakt w języku polskim */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Kontakt w języku polskim – Iana</h2>
              <div className="flex items-center justify-center md:justify-start mb-2">
                <FaEnvelope className="mr-2 text-[#6A8CD3]" />
                <a href="mailto:iana@bloch.com.pl" className="hover:underline text-gray-700">
                  iana@bloch.com.pl
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <FaPhone className="mr-2 text-[#6A8CD3]" />
                <a href="tel:+48502765640" className="hover:underline text-gray-700">
                  502 765 640
                </a>
              </div>
            </div>

            {/* Kontakt w języku angielskim */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Kontakt w języku angielskim – Jakob</h2>
              <div className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-2 text-[#6A8CD3]" />
                <a href="mailto:jakob@bloch.com.pl" className="hover:underline text-gray-700">
                  jakob@bloch.com.pl
                </a>
              </div>
            </div>
          </div>

          {/* Zdjęcie po prawej */}
          <div className="flex justify-center">
            <img src="/images/contact.png" alt="Zespół BLOCH" className="rounded-lg shadow-lg max-w-full h-auto" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
