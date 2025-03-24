import Navbar from './components/Navbar';
import Home from './screens/Home';
import Footer from './components/Footer';
import Team from './screens/Team';
import Contact from './screens/Contact';
import JobOffers from './screens/JobOffers';
import ForCompanies from './screens/ForCompanies';
import SpecialistJob from './screens/job/SpecialistJob';
import ForemanJob from './screens/job/ForemanJob';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div>
        <Navbar />

        {/* Main content */}
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/team' element={<Team />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/job-offers' element={<JobOffers />} />
            <Route path='/for-companies' element={<ForCompanies />} />
            <Route path='/job/specialist' element={<SpecialistJob />} />
            <Route path='/job/foreman' element={<ForemanJob />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
