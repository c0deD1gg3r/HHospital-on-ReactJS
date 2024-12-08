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
            <div
              key={OncologyLists.id}
              className='Oncology-main-div'
            >
              <div className='Oncology-content-div'>
                <div
                  className='Oncology-icon-div'
                  key={OncologyLists.id}
                >
                  <Icon
                    size={100}
                  />
                </div>


                <div className='Oncology-text-div'>
                  {OncologyLists.title}
                </div>
              </div>
            </div>

          );
        })}
      </div>
    </div>
  );
};

export default Oncology;