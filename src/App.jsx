import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import MainPage from '../components/Pages/MainPage/MainPage';
import About from '../components/Pages/About/About';
import Footer from '../components/Footer/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />

        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<MainPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
