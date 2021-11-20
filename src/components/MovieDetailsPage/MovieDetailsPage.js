import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as moviesAPI from '../../services/movies-api';
import Cast from '../Cast/Cast';
import s from './MovieDetailsPage.module.css';

const MovieDetailsView = () => {
  const posterUrl = 'https://image.tmdb.org/t/p/w500';
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesAPI.fetchMovieById(movieID).then(data => setMovie(data));
  }, [movieID]);
  return (
    <>
      {movie && (
        <>
          <div className={s.item}>
            <img
              src={`${posterUrl}${movie.poster_path}`}
              alt={movie.title}
              width="300px"
            />
            <div className={s.description}>
              <h2>{movie.title}</h2>
              <p>User Score: {movie.vote_average}</p>
              <h3>Owerview</h3>
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
                <Link to={`/movies/${movieID}/cast`}>Cast</Link>
              </li>
              <li></li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetailsView;
