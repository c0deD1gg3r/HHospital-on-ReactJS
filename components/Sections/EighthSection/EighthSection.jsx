import { Oncology, OncologyText } from '../../../src/Constants';
import './EighthSection.css';

const oncStyle = {
  textAlign: "center",
  margin: "15px",
  padding: "30px",
  borderRadius: "20px",
  backgroundColor: "lightseagreen",
  flex: "1 1 0",
  height: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

const onctStyle = {
  fontSize: '20px'
};


const EighthSection = () => {
  return (
    <div style={{ marginTop: '100px' }} className='egMainBlock'>
      <h1 style={{ textAlign: 'center' }}>Отделение онкологии</h1>

      <div style={{ display: 'flex' }}>
        <div>
          {OncologyText.map((onct) => (
            <div style={onctStyle} key={onct.id}>
              <p style={{ color: 'lightgray' }}><strong style={{ color: "lightseagreen" }}>{onct.title}</strong> {onct.text}</p>
            </div>
          ))}
        </div>

        <div style={{ flexWrap: 'wrap', display: 'flex' }}>
          {Oncology.map((onc) => (
            <div key={onc.id} className='onc'>
              {onc.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EighthSection;