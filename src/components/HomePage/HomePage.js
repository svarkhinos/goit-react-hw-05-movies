import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as moviesAPI from '../../services/movies-api';

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesAPI.fetchTrendMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {console.log(movies)}
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
      ;
    </>
  );
};

export default HomePage;
