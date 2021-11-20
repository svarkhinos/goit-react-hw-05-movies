import * as moviesAPI from '../../services/movies-api';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

const Cast = () => {
  const { movieID } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    moviesAPI.fetchCastById(movieID).then(data => {
      setCast(data);
    });
  }, [movieID]);
  return (
    <>
      <ul>
        {console.log(cast)}
        {/* {cast && cast.map(el => {
            return <li key={el.id}>1</li>;
          })} */}
      </ul>
    </>
  );
};

export default Cast;
