
import Heart from '../../Icon/Heart/Heart';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='div-heart'>
        <Heart />
      </div>
      <div className='container'>
        <ul className='nav-list'>
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