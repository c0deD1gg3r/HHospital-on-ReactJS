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

      {/* Боковое меню */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul className='navList'>
          <li className='navListItem'>
            <NavLink to='/DIRECTIONS' className='navLink'>
              НАПРАВЛЕНИЯ
            </NavLink>
          </li>

          <li className='navListItem'>
            <NavLink to='/DEVELOPMENTS' className='navLink'>
              ЗАБОЛЕВАНИЯ
            </NavLink>
          </li>

          <li className='navListItem'>
            <NavLink to='/DOCTORS' className='navLink'>
              ВРАЧИ
            </NavLink>
          </li>

          <li className='navListItem'>
            <NavLink to='/COST' className='navLink'>
              ЦЕНЫ
            </NavLink>
          </li>

          <li className='navListItem'>
            <NavLink to='/CONTACTS' className='navLink'>
              КОНТАКТЫ
            </NavLink>
          </li>
        </ul>
        <div className='blockInput'>
          <input
            type="text"
            placeholder='Что ищем?'
            className='inputSearch'
          />
        </div>

      </div>
    </>
  );
};

export default Header;
