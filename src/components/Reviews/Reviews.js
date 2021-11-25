import * as moviesAPI from '../../services/movies-api';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const { movieID } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    moviesAPI.fetchReviewsById(movieID).then(data => {
      setReviews(data.results);
    });
  }, [movieID]);

  if (reviews && reviews.length === 0) {
    return <p>We don't have any reviews for this movie</p>;
  } else {
    return (
      <>
        <ul>
          {reviews &&
            reviews.map(el => (
              <li key={el.id}>
                <p>{el.author}</p>
                <p>{el.content}</p>
              </li>
            ))}
        </ul>
      </>
    );
  }
};

export default Reviews;
