
import ButtonThirdSection from '../../../Buttons/ButtonThirdSection/ButtonThirdSection';
import './ThirdSection.css';
import { useState } from 'react';

const ThirdSection = () => {

  const [phone, setPhone] = useState('');

  const handleChange = (e) => {
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

    setPhone(formattedValue);
  };

  return (
    <div className='block-main'>
      <div className='block-content'>
        <h1>
          Запишитесь на консультацию к врачу <br />
          <strong style={{ fontSize: '40px' }}>+7 919 522-34-21</strong>
        </h1>
        <h2 style={{ opacity: '0.7' }}>Мы можем перезвонить вам:</h2>
        <input
          type="tel"
          value={phone}
          onChange={handleChange}
          placeholder="(___) ___-__-__"
          maxLength="18"
          className='block-input'
        />

        <h3 style={{ lineHeight: '2rem' }}>
          Свяжитесь с нами или оставьте ваши контактные данные — и <br />
          наши специалисты вскоре вам перезвонят. Опытный медицинский <br />
          координатор подробно расскажет, какие виды диагностики и лечения <br />
          можно пройти в клинике МАММА, запишет <br />
          на прием к нужному врачу в удобное для вас время.
        </h3>
        <ButtonThirdSection />
      </div>
    </div>
  );
};

export default ThirdSection;