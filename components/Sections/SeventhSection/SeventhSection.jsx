import './SeventhSection.css';
import Room from '../../../src/img/Room.jpg';
import { Inpatient } from '../../../src/Constants';


const styleImg = {
  width: '700px',
  height: '660px'
};

const SeventhSection = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      <h1 style={{ textAlign: 'center' }}>Лечение в стационаре</h1>
      <div style={{ display: 'flex', marginTop: '50px' }}>
        <div>
          <div>
            {Inpatient.map((inpt) => {
              const Icons = inpt.icon;

              return (
                <div key={inpt.id} style={{ padding: '0 0 30px 0', display: 'flex', marginRight: '50px' }}>
                  <div>
                    <Icons
                      size={60}
                      style={{ opacity: '0.8' }}
                    />
                  </div>
                  <div style={{ marginLeft: '20px', opacity: '0.8' }}>
                    {inpt.title}
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            <h2 style={{ textAlign: 'center' }}>Стоимость пребывания в стационаре:</h2>
            <p style={{ fontSize: '20px' }}>1 местная палата — 18 000 ₽</p>
            <p style={{ fontSize: '20px' }}>1 местная палата — 12 000 ₽</p>
            <p style={{ fontSize: '20px' }}>1 местная палата — 10 000 ₽</p>

            <button className='btnRoom'>ЗАБРОНИРОВАТЬ ПАЛАТУ</button>
          </div>
        </div>

        <div>
          <img
            src={Room}
            style={styleImg}
          />
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;