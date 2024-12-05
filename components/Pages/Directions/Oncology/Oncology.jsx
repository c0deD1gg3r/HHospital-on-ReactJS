import './Oncology.css';
import OncologyImg from '../../../../src/img/Oncology.jpg';
import Button from '../../../../Buttons/ButtonHeader/Button';
import { OncologyList } from '../../../../src/Constants';

const Oncology = () => {
  return (
    <div>
      <h1 style={{
        textAlign: 'center'
      }}
      >
        Онкологическое отделение
      </h1>
      <div style={{ display: 'flex', borderRadius: '10px' }}>
        <div className='lists'>
          <h2>
            Срочная госпитализация и современные методы лечения
          </h2>
          <ul>
            <li><span style={{ color: 'lightgreen' }}>&#10004;</span> &nbsp; Хирургическое вмешательство</li>
            <li><span style={{ color: 'lightgreen' }}>&#10004;</span> &nbsp; Химиотерапия</li>
            <li><span style={{ color: 'lightgreen' }}>&#10004;</span> &nbsp; Лучевая терапия</li>
            <li><span style={{ color: 'lightgreen' }}>&#10004;</span> &nbsp; Гормональная терапия</li>
            <li><span style={{ color: 'lightgreen' }}>&#10004;</span> &nbsp; Иммунотерапия</li>
            <li><span style={{ color: 'lightgreen' }}>&#10004;</span> &nbsp; Таргетная терапия</li>
          </ul>
          <Button />
        </div>

        <div>
          <img style={{
            width: '100%',
            height: '100%',
            borderRadius: '0px 10px 10px 0px',
          }}
            src={OncologyImg}
            alt="OncologyImg"
          />
        </div>
      </div>

      <div style={{ display: 'flex', flex: '1 1 0', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '100px' }}>
        {OncologyList.map((OncologyLists) => {
          let Icon = OncologyLists.icon;

          return (
            <div key={OncologyLists.id} style={{
              display: 'flex',
              flex: '1 1 0',
              margin: '0px 0px 15px 0px',
            }}>
              <div key={OncologyLists.id} style={{
                backgroundColor: 'lightseagreen',
                margin: '0px 0px 15px 0px',
                padding: '50px',
              }}>
                <Icon
                  size={100}
                />
              </div>


              <div style={{
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                backgroundColor: 'black',
                fontSize: '20px',
                padding: '0px 70px 0px 80px',
                margin: '0px 0px 15px 0px',
                width: '250px'
              }}>
                {OncologyLists.title}
              </div>
            </div>

          );
        })}
      </div>
    </div>
  );
};

export default Oncology;