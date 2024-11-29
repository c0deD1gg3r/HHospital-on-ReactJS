import './Search.css';
import { IoSearch } from "react-icons/io5";;
import { useState } from 'react';

const Search = () => {
  const [visible, setVisible] = useState(false);

  function handleClick() {
    setVisible(!visible);
  }


  return (
    <>
      {visible && (
        <input
          type="text"
          placeholder='Что ищем?'
          className='input-search'
        />
      )}

      <IoSearch
        onClick={handleClick}
        className='Ic-Search'
      />
    </>
  );
};

export default Search;;