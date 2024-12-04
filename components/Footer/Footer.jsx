import './Footer.css';
import logo from '../../src/img/Logo.png';
import Button from '../../Buttons/ButtonHeader/Button';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div style={{
      marginTop: '100px',
      margin: '0px',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Link to='/'>
          <img style={{
            width: '60%',
            padding: '10px'
          }}
            src={logo}
          />
        </Link>

        <div>
          <h2>pp@healthospital@mail.ru</h2>
          <p>отправить нам документы</p>
        </div>

        <div style={{ padding: '10px 10px' }}>
          <Button />
        </div>
      </div>
      <hr className='hr-footer' />
      {/* -------------------------------- */}


      <div>

      </div>
    </div>
  );
};

export default Footer;