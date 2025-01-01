import './Footer.css';
import logo from '../../src/img/Logo.png';
import Button from '../../Buttons/ButtonHeader/Button';
import { Link } from 'react-router-dom';

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (

    <div
      style={{
        marginTop: '100px',
        margin: '0px',
      }}
      className='footerMainBlock'
    >
      <hr className='hr-footer' />
      <div className='footerContent'>
        <Link to='/'>
          <img style={{
            width: '60%',
            padding: '10px'
          }}
            onClick={scrollTop}
            src={logo}
          />
        </Link>

        <div className='footerMail'>
          <h2>pp@healthospital@mail.ru</h2>
          <p>отправить нам документы</p>
        </div>

        <div className='footerBtn' style={{ padding: '10px 10px', marginTop: '30px' }}>
          <Button />
        </div>
      </div>
      <hr className='hr-footer' />
      {/* -------------------------------- */}


      <div>
        {/* Мб что-то ещё будет. */}
      </div>

    </div>
  );
};

export default Footer;