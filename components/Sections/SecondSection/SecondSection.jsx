import { directions } from '../../../src/Constants';
import './SecondSection.css';
import { Link } from 'react-router-dom';

const SecondSection = () => {

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div style={{ marginTop: '100px', textAlign: 'center' }}>
        <h1>Направления клиники</h1>
      </div>
      <div className='direction-main-blocks'>
        {directions.map((direction) => {
          const Icon = direction.icon;
          return (
            <Link
              to={direction.link}
              key={direction.id}
              className='direction-blocks'
            >
              <Icon className='icon' /> <br />
              <span style={{ fontSize: '17px' }}>{direction.text}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default SecondSection;