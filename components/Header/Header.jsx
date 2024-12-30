
import { NavLink } from 'react-router-dom';
import Button from '../../Buttons/ButtonHeader/Button';
import IcPhone from '../../Icon/Phone/IcPhone';
import Search from '../../Icon/Search/Search';
import './Header.css';
import { useState } from 'react';
import logo from '../../src/img/Logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);


  const Open = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header>
        <div className='all'>
          <button id='btnOpen' className={`btnOpen ${isOpen ? 'active' : ''}`} onClick={Open}>
            &#9776;
          </button>
          <NavLink className='hLogo' to='/'>
            <img src={logo} alt={logo} />
          </NavLink>

          <div className='center'>
            <IcPhone />
            {/* <span>+ 7 ___ __-__ ___</span> */}
          </div>
          <div className='SB'>
            <Search />
            &nbsp;
            &nbsp;
            <Button />
          </div>
        </div>
      </header>
      <hr className='hr' />
    </>
  );
};

export default Header;