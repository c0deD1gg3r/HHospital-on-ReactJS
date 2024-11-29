import { reasons } from '../../../src/Constants';
import './FourthSection.css';


const FourthSection = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      <h1 style={{ textAlign: 'center' }}>9 причин обратиться в клинику HHospital</h1>
      <p style={{ textAlign: 'center', fontSize: '18px', lineHeight: '2.4rem', color: 'rgba(245, 245, 245, 0.772)' }}>
        Мы ориентируемся на высочайшие мировые стандарты оказания медицинской помощи. Клиника <br />
        HHospital — это место, где к каждому пациенту относятся максимально заботливо и внимательно,<br />
        применяют новейшие технологии и лекарственные препараты. Поэтому многие обращаются к нам<br />
        повторно и рекомендуют родственникам, друзьям.
      </p>

      <div className='main-block'>
        {reasons.map((reason) => {
          const Icon = reason.icon;
          return (
            <div key={reason.id} className='main-reason-icon-block' style={{ display: 'flex' }}>
              <div className='icon-block'>
                <Icon style={{ fontSize: '90px' }} />
              </div>
              <div className='reason-block'>
                <h3 style={{ fontWeight: '700', fontSize: '20px', color: '#375111' }}>{reason.title}</h3>
                <span>{reason.text}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FourthSection;