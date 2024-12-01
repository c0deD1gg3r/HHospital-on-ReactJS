import './Heart.css';
import { BsPersonHearts } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Heart = () => {
  return (
    <>
      <Link to='/'>
        <BsPersonHearts
          className='Heart'
        />
      </Link>
    </>
  );
};

export default Heart;