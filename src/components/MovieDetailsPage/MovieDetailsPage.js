import { useParams } from 'react-router';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import * as moviesAPI from '../../services/movies-api';
import Button from '../Button/Button';
import s from './MovieDetailsPage.module.css';
import Default from '../default.jpg';

const Cast = lazy(() => import('../Cast/Cast.js' /*webpackChunkName: "Cast"*/));
const Reviews = lazy(() =>
  import('../Reviews/Reviews.js' /*webpackChunkName: "Reviews"*/),
);

const MovieDetailsPage = () => {
  const posterUrl = 'https://image.tmdb.org/t/p/w500';
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);
  const [backAddress, setBackAddress] = useState({});

  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setBackAddress({
        pathname: location.state.pathname,
        search: location.state.search,
      });
    }
    moviesAPI.fetchMovieById(movieID).then(data => setMovie(data));
  }, [movieID, location.state]);
  return (
    <>
      <Link to={`${backAddress.pathname}${backAddress.search}`}>
        <Button />
      </Link>
      {movie && (
        <>
          <div className={s.item}>
            <img
              src={
                movie.poster_path ? `${posterUrl}${movie.poster_path}` : Default
              }
              alt={movie.title}
              width="300px"
            />
            <div className={s.description}>
              <h2>{movie.title}</h2>
              <p>User Score: {movie.vote_average}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <ul>
                {movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <ul>
              Additional information
              <li>
                <NavLink to={`/movies/${movieID}/cast`}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={`/movies/${movieID}/reviews`}>Reviews</NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/cast" element={<Cast />}></Route>
          <Route path="/reviews" element={<Reviews />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
