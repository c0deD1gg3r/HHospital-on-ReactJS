import ButtonF from '../../../Buttons/ButtonFirstSection/ButtonF';
import Carousel from '../../Carousel/Carousel';
import './FirstSection.css';

const FirstSection = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ lineHeight: '8rem' }}>
          <div className='name-hospital'>
            <h1>
              HHospital | Клиника вашего здоровья
            </h1>
          </div>
          <div className='main-div'>
            Это место, где можно получить современную, эффективную медицинскую<br />
            помощь при самых разных заболеваниях. Для этого мы собрали <br />
            команду ведущих врачей-специалистов, объединили передовые <br />
            подходы и лучшие практики в соответствии с последними
            версиями <br />
            международных протоколов. Ежегодно нам доверяют
            свое здоровье<br />
            более 7000 пациентов из Москвы и различных регионов России. <br />

            <ButtonF />

          </div>
        </div>
        <div>
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default FirstSection;