
import Button from '../../Buttons/ButtonHeader/Button';
import IcPhone from '../../Icon/Phone/IcPhone';
import Search from '../../Icon/Search/Search';
import './Header.css';


const Header = () => {
  return (
    <>
      <header>
        <div className='all'>
          <div className='center'>
            <IcPhone />
            {/* <span>+ 7 ___ __-__ ___</span> */}
          </div>
          <div style={{ display: 'flex' }}>
            {/* <Search /> */}
            &nbsp;
            &nbsp;
            <Button />
          </div>
        </div>
      </header>
      <hr className='hr' />
    </>
  );
};

export default Header;