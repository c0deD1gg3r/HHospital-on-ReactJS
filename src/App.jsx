import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import MainPage from '../components/Pages/MainPage/MainPage';
import About from '../components/Pages/About/About';
import Footer from '../components/Footer/Footer';
import Oncology from '../components/Pages/Directions/Oncology/Oncology';
import DepartamentOfSurgery from '../components/Pages/Directions/DepartamentOfSurgery/DepartamentOfSurgery';
import Gynecology from '../components/Pages/Directions/Gynecology/Gynecology';
import Urolgia from '../components/Pages/Directions/Urolgia/Urolgia';
import Diagnostic from '../components/Pages/Directions/Diagnostic/Diagnostic';
import Neurology from '../components/Pages/Directions/Neurology/Neurology';
import Mammology from '../components/Pages/Directions/Mammology/Mammology';
import ReanimationDepartment from '../components/Pages/Directions/ReanimationDepartment/ReanimationDepartment';
import Endoscopy from '../components/Pages/Directions/Endoscopy/Endoscopy';
import Therapy from '../components/Pages/Directions/Therapy/Therapy';
import Oncoorthopedics from '../components/Pages/Directions/Oncoorthopedics/Oncoorthopedics';




function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />

        <Routes>

          {/* About the HHospital */}
          <Route path='/about' element={<About />} />

          {/* Main pages */}
          <Route path='/' element={<MainPage />} />

          {/* Directions */}
          <Route path='/directions/Oncology' element={<Oncology />} />
          <Route path='/directions/DepartamentOfSurgery' element={<DepartamentOfSurgery />} />
          <Route path='/directions/Gynecology' element={<Gynecology />} />
          <Route path='/directions/Urolgia' element={<Urolgia />} />
          <Route path='/directions/Diagnostic' element={<Diagnostic />} />
          <Route path='/directions/Neurology' element={<Neurology />} />
          <Route path='/directions/Mammology' element={<Mammology />} />
          <Route path='/directions/ReanimationDepartment' element={<ReanimationDepartment />} />
          <Route path='/directions/Endoscopy' element={<Endoscopy />} />
          <Route path='/directions/Therapy' element={<Therapy />} />
          <Route path='/directions/Oncoorthopedics' element={<Oncoorthopedics />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
