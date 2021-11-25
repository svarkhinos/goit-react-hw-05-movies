import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as moviesAPI from '../../services/movies-api';

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  const location = useLocation();

  location.state = {
    pathname: location.pathname,
    search: location.search,
  };

  useEffect(() => {
    moviesAPI.fetchTrendMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={location.state}>
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
      </ul>
      ;
    </>
  );
};

export default HomePage;
