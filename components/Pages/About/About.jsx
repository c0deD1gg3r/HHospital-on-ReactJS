import './About.css';
import logo from '../../../src/img/Logo.png';
import { reasons } from '../../../src/Constants/index';

const About = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>О нас</h1>
      <div
        style={{
          display: 'flex',
          boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
          borderRadius: '10px',
          padding: '15px'
        }}>
        <div>
          <h1 >
            Все мои профессиональные стремления так или иначе направлены на помощь пациентам
          </h1>
          <p style={{ lineHeight: '1.8rem', paddingBottom: '30px' }}>
            Клиника «HHospital» – это место, объединяющее самых лучших врачей, качественные медицинские услуги и сервис, обеспечивающий максимальный комфорт и удобство пациентов. Мне хотелось создать медицинское учреждение, которое помимо лечения способно дать тепло и заботу, место, где пациента поймут и поддержат, дадут надежду и настроят на выздоровление. При этом мы сделали все возможное, чтобы оставаться в среднем ценовом сегменте и быть доступными для широких слоёв населения.
          </p>

          <div style={{ display: 'flex', marginTop: '40px' }}>
            <div>
              <img src={logo} alt="" />
            </div>
            <div style={{ marginLeft: '10px', lineHeight: '2rem' }}>
              <h3 style={{ fontSize: '20px' }}>Основатель клиники</h3>
              <p style={{ fontSize: '30px', opacity: '0.7' }}>Древенский Андрей Алексеевич</p>
            </div>
          </div>

        </div>

        <div>
          <img style={{ width: '100%', height: '100%' }} src="https://ryanschultz.com/wp-content/uploads/2018/03/young-man-2939344_1920.jpg" alt="" />
        </div>
      </div>


      <div style={{ marginTop: '100px' }}>
        <h1 style={{ textAlign: 'center' }}>Наши преимущества</h1>
        <p style={{ textAlign: 'center', fontSize: '20px' }}>
          Наша клиника обладает всеми необходимыми преимуществами, при помощи которых вы, без сомнения, сможете выбрать именно нас для лечения вашего недуга.
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
        <hr className='hr-about' />
      </div>
    </>
  );
};

export default About;
