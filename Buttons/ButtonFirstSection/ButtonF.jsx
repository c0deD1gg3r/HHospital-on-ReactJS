import { Link } from 'react-router-dom';
import './ButtonF.css';

const ButtonF = () => {
  return (
    <Link to='/about'>
      <button className='btnF'>УЗНАТЬ ПОДРОБНЕЕ</button>
    </Link>
  );
};

export default ButtonF;