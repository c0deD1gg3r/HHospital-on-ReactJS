import ButtonThirdSection from '../../../Buttons/ButtonThirdSection/ButtonThirdSection';
import { sixthSecDiagnostic } from '../../../src/Constants';
import './SixthSection.css';
import { useState } from 'react';

const SixthSection = () => {
  const [phoneS, setPhoneS] = useState('');

  const handleChangeS = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    let formattedValue = ' ';

    if (value.length > 0) {
      formattedValue += '(' + value.slice(0, 3);
    }
    if (value.length >= 4) {
      formattedValue += ') ' + value.slice(3, 6);
    }
    if (value.length >= 7) {
      formattedValue += '-' + value.slice(6, 8);
    }
    if (value.length >= 9) {
      formattedValue += '-' + value.slice(8, 10);
    }

    setPhoneS(formattedValue);
  };

  return (
    <div style={{ marginTop: '100px' }}>
      <h1 style={{ textAlign: 'center' }}>Консультации врачей и современные методы диагностики</h1>
      <div style={{ display: 'flex' }}>
        <div>
          <div style={{ marginTop: '50px' }}>
            <span style={{ fontSize: '25px' }}>
              В распоряжении наших врачей аппарат для УЗИ <br />
              экспертного класса, цифровой маммограф, рентгеновский <br />
              аппарат, собственная клинико-диагностическая лаборатория <br />
              и другие современные диагностические возможности. <br /> <br />

              Второе врачебное мнение от эксперта в сложных случаях, <br />
              когда диагноз сомнителен, лечение не помогает. <br /> <br />

              Врачебный консилиум с участием специалистов разного <br />
              профиля. Составим персональный план обследования и <br />
              лечения.
            </span>
            <h2 style={{ textAlign: 'center', marginTop: '50px', fontSize: '30px' }}>Записаться на консультацию</h2 >

            <input
              type="tel"
              value={phoneS}
              onChange={handleChangeS}
              placeholder="Ваш телефон"
              maxLength="18"
              className='blockInputS'
            />
            <ButtonThirdSection />
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '900px' }}>
          {sixthSecDiagnostic.map((diagnostics) => {
            return (
              <div className='blockContent' key={diagnostics.id}>
                <h3>{diagnostics.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};


export default SixthSection;