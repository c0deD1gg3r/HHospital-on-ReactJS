import { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../src/img/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const Open = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='nav'>
      <div className='div-heart'>
        <NavLink className="Logo" to='/'>
          <img
            src={Logo}
            alt={Logo}
          />
        </NavLink>
      </div>
      <div className='container'>
        <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
          <li className='nav-list-item'>
            <NavLink to='/DIRECTIONS' className='nav-link'>
              НАПРАВЛЕНИЯ
            </NavLink>
          </li>

          <li className='nav-list-item'>
            <NavLink to='/DEVELOPMENTS' className='nav-link'>
              ЗАБОЛЕВАНИЯ
            </NavLink>
          </li>

          <li className='nav-list-item'>
            <NavLink to='/DOCTORS' className='nav-link'>
              ВРАЧИ
            </NavLink>
          </li>

          <li className='nav-list-item'>
            <NavLink to='/COST' className='nav-link'>
              ЦЕНЫ
            </NavLink>
          </li>

          <li className='nav-list-item'>
            <NavLink to='/CONTACTS' className='nav-link'>
              КОНТАКТЫ
            </NavLink>
          </li>
        </ul>
      </div>
    </nav >
  );
};

export default Navbar;