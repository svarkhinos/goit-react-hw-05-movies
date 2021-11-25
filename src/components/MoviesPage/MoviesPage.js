import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import Searchbar from '../Searchbar/Searchbar';
import * as moviesAPI from '../../services/movies-api';

const MoviesPage = ({ newSearch }) => {
  const [searchValue, setSearchValue] = useState('');
  const [result, setResult] = useState(null);

  const navigate = useNavigate();

  const location = useLocation();

  // const path = location.pathname;

  if (location.state === null) {
    location.state = {
      pathname: location.pathname,
      search: location.search,
    };
  }

  const search = new URLSearchParams(location.search).get('query') ?? '';

  const handleSearchFormSubmit = value => {
    setSearchValue(value);

    navigate(`?query=${value}`);
    // navigate(`?query=${value}`, {
    //   state: {
    //     pathname: path,
    //     search: `?query=${value}`,
    //   },
    // });
  };

  useEffect(() => {
    if (search !== searchValue) {
      setSearchValue(search);
    }
    if (searchValue === '') {
      return;
    }

    moviesAPI.fetchMoviesByQuery(searchValue).then(data => {
      setResult(data.results);
    });
  }, [searchValue, search]);

  if (result && result.length === 0) {
    return (
      <>
        <Searchbar onSubmit={handleSearchFormSubmit} />
        <p>No matches, try again!</p>
      </>
    );
  } else {
    return (
      <>
        <Searchbar onSubmit={handleSearchFormSubmit} />
        <ul>
          {result &&
            result.map(el => (
              <li key={el.id}>
                <Link to={`/movies/${el.id}`} state={location.state}>
                  {el.title}
                </Link>
              </li>
            ))}
        </ul>
      </>
    );
  }
};

export default MoviesPage;
