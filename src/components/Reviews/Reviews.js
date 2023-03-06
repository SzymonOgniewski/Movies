import { fetchMovieReviews } from 'components/api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './reviews.module.css';
export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const handleFetchReviews = async () => {
      const data = await fetchMovieReviews(id);
      console.log(data);
      setReviews(data.results);
    };
    handleFetchReviews();
  }, [id]);
  return (
    <>
      <ul className={css.reviews}>
        {reviews?.map(review => (
          <li key={review.id}>
            <p className={css.reviewAuthor}>Author: {review.author_details.username}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
