import * as moviesAPI from '../../services/movies-api';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import s from './Cast.module.css';
import Default from '../default.jpg';

const Cast = () => {
  const profilerUrl = 'https://image.tmdb.org/t/p/w500';
  const { movieID } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    moviesAPI.fetchCastById(movieID).then(data => {
      setCast(data.cast);
    });
  }, [movieID]);

  if (cast && cast.length === 0) {
    return <p>We don't have any cast for this movie</p>;
  } else {
    return (
      <>
        <ul className={s.cast}>
          {cast &&
            cast.map(el => (
              <li key={el.id}>
                <img
                  src={
                    el.profile_path
                      ? `${profilerUrl}${el.profile_path}`
                      : Default
                  }
                  alt={el.name}
                ></img>
                <p>{el.name}</p>
                <p>Character: {el.character}</p>
              </li>
            ))}
        </ul>
      </>
    );
  }
};

export default Cast;
