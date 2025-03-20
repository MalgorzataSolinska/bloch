import Navbar from './components/Navbar';
import Home from './screens/Home';
import Footer from './components/Footer';
import Team from './screens/Team';
import Contact from './screens/Contact'
import JobOffers from './screens/JobOffers';
import ForCompanies from './screens/ForCompanies';
import SpecialistJob from './screens/job/SpecialistJob';
import ForemanJob from './screens/job/ForemanJob'
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
            <Route path='/Team' element={<Team />} />
            <Route path='/Contact' element={<Contact />} /> 
            <Route path='/JobOffers' element={<JobOffers />} />
            <Route path='/ForCompanies' element={<ForCompanies/> }/>
            <Route path='/job/specialist' element={<SpecialistJob/>}/>
            <Route path='/job/foreman' element={<ForemanJob/>}/>
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
