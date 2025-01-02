import { NavLink } from 'react-router-dom';
import Button from '../../Buttons/ButtonHeader/Button';
import IcPhone from '../../Icon/Phone/IcPhone';
import Search from '../../Icon/Search/Search';
import './Header.css';
import { useState } from 'react';
import logo from '../../src/img/Logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDir, setIsOpenDir] = useState(false);
  const [isOpenDev, setIsOpenDev] = useState(false);

  const Open = () => {
    setIsOpen(!isOpen);
  };

  const CloseSidebar = () => {
    setIsOpen(false);
  };

  const NavSidebarDir = () => {
    setIsOpenDir(!isOpenDir);
  };

  const NavSidebarDev = () => {
    setIsOpenDev(!isOpenDev);
  };

  return (
    <>
      <header>
        <div className='all'>
          <button id='btnOpen' className={`btnOpen ${isOpen ? 'active' : ''}`} onClick={Open}>
            &#9776;
          </button>

          <NavLink className='hLogo' to='/' onClick={CloseSidebar}>
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

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul className='navList'>
          <li className='navListItem'>
            <NavLink to='/DIRECTIONS' className='navLinkDirections' onClick={CloseSidebar}>
              НАПРАВЛЕНИЯ
            </NavLink>
            <button className={`btnPlusDir ${isOpenDir ? 'activeBtnPlusDir' : ''}`} onClick={NavSidebarDir}>+</button>
            <div className={`subdivision ${isOpenDir ? 'openDir' : ''}`}>
              <ul className='subdivisionNavDir'>
                <NavLink className='subdivisionNavDirLi'>
                  <li>Онкология +</li>
                </NavLink>
                <NavLink className='subdivisionNavDirLi'>
                  <li>Химиотерапия +</li>
                </NavLink>
                <NavLink className='subdivisionNavDirLi'>
                  <li>Отделение хирургии +</li>
                </NavLink>
                <NavLink className='subdivisionNavDirLi'>
                  <li>Гинекология +</li>
                </NavLink>
                <NavLink className='subdivisionNavDirLi'>
                  <li>Неврология +</li>
                </NavLink>
                <NavLink className='subdivisionNavDirLi'>
                  <li>Реанимационное отделение</li>
                </NavLink>
                <NavLink className='subdivisionNavDirLi'>
                  <li>Отделение эндоскопии</li>
                </NavLink>
                <NavLink className='subdivisionNavDirLi'>
                  <li>Центр управления болью</li>
                </NavLink>
                <NavLink className='subdivisionNavDirLi'>
                  <li>Онкоортопедия</li>
                </NavLink>
                <NavLink className='subdivisionNavDirLi'>
                  <li>Гематология</li>
                </NavLink>
                <NavLink className='subdivisionNavDirLi'>
                  <li>Психотерапия</li>
                </NavLink>
                <NavLink className='subdivisionNavDirLi'>
                  <li>Флебология</li>
                </NavLink>
                <NavLink className='subdivisionNavDirLi'>
                  <li>Пульмонология</li>
                </NavLink>
                <NavLink className='subdivisionNavDirLi'>
                  <li>Пластическая хирургия +</li>
                </NavLink>
              </ul>
            </div>
          </li>

          <li className='navListItem'>
            <NavLink to='/DEVELOPMENTS' className='navLinkDevelopments' onClick={CloseSidebar}>
              ЗАБОЛЕВАНИЯ
            </NavLink>
            <button className={`btnPlusDev ${isOpenDev ? 'activeBtnPlusDev' : ''}`} onClick={NavSidebarDev}>+</button>
            <div className={`subdivision ${isOpenDev ? 'openDev' : ''}`}>
              <ul className='subdivisionNavDev'>
                <li>Пу-пу-пу</li>
                <li>Пу-пу-пу</li>
                <li>Пу-пу-пу</li>
                <li>Пу-пу-пу</li>
              </ul>
            </div>
          </li>

          <li className='navListItem'>
            <NavLink to='/DOCTORS' className='navLink' onClick={CloseSidebar}>
              ВРАЧИ
            </NavLink>
          </li>

          <li className='navListItem'>
            <NavLink to='/COST' className='navLink' onClick={CloseSidebar}>
              ЦЕНЫ
            </NavLink>
          </li>

          <li className='navListItem'>
            <NavLink to='/CONTACTS' className='navLink' onClick={CloseSidebar}>
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

        <Button />

      </div>
    </>
  );
};

export default Header;
