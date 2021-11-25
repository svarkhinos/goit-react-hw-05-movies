import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReactComponent as MyIcon } from './icon.svg';
import s from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = event => {
    setSearchValue(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchValue.trim() === '') {
      toast('Enter your request');
      return;
    }
    onSubmit(searchValue);
    setSearchValue('');
  };

  return (
    <>
      <div className={s.Searchbar}>
        <form onSubmit={handleSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchFormButton}>
            <MyIcon />
          </button>
          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={searchValue}
            onChange={handleChange}
          />
        </form>
      </div>
      <ToastContainer autoClose={3000} position={'top-center'} />
    </>
  );
};

export default Searchbar;
