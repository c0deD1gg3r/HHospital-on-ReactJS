import { useState } from 'react';
import { doctors } from '../../../src/Constants';
import './FifthSection.css';
import Button from '../../../Buttons/ButtonHeader/Button';

const styleContentBlock = {
  margin: '0 10px',
  flex: '1 0 0',
  flexDirection: 'column',
  display: 'flex',
  height: '100%',
  padding: '10px',
  borderRadius: '8px',
  height: '550px',
};

const styleImg = {
  width: '310px',
  height: '250px',
  borderRadius: '100%',
  margin: '0 auto'
};

const mainBlock = {
  display: 'flex',
  textAlign: 'center',

};

const btnCard = {
  marginTop: 'auto',
};

const btnPrevNext = {
  border: "none",
  fontSize: "24px",
  cursor: "pointer",
  padding: "10px",
  transition: "background 0.3s",
  margin: " 0 10px",
  backgroundColor: "lightseagreen",
  borderRadius: "30px",
  color: "#374551",
  width: "60px",
  height: '60px',
  marginTop: '250px',
};

const FifthSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % doctors.length);
  };

  const previous = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + doctors.length) % doctors.length
    );
  };

  return (
    <div style={{ marginTop: '100px' }}>
      <div style={mainBlock}>
        <button style={btnPrevNext} onClick={previous}>❮</button>
        {Array.from({ length: itemsToShow }).map((_, index) => {
          const doctorIndex = (currentIndex + index) % doctors.length;
          return (
            <div
              key={doctorIndex}
              style={styleContentBlock}
            >
              <img src={doctors[doctorIndex].img} style={styleImg} />
              <h1>{doctors[doctorIndex].title}</h1>
              <p>{doctors[doctorIndex].text}</p>
              <div style={btnCard}>
                <Button />
              </div>
            </div>
          );
        })}
        <button style={btnPrevNext} onClick={next}>❯</button>
      </div>
    </div>
  );
};

export default FifthSection;