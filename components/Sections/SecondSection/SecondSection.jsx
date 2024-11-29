import { directions } from '../../../src/Constants';
import './SecondSection.css';


const SecondSection = () => {
  return (
    <>
      <div style={{ marginTop: '100px', textAlign: 'center' }}>
        <h1>Направления клиники</h1>
      </div>
      <div className='direction-main-blocks'>
        {directions.map((direction) => {
          const Icon = direction.icon;
          return (
            <div key={direction.id} className='direction-blocks'>
              <Icon className='icon' /> <br />
              <span style={{ fontSize: '17px' }}>{direction.text}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SecondSection;