import { fetchMovieReviews } from 'components/api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import css from './reviews.module.css';
const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const handleFetchReviews = async () => {
      setIsLoading(true);
      const data = await fetchMovieReviews(id);
      setReviews(data.results);
      setIsLoading(false);
    };
    handleFetchReviews();
  }, [id]);
  return (
    <>
      {isLoading && <Loader />}
      {reviews?.length === 0 ? (
        <p className={css.errorMsg}>There are no reviews to display</p>
      ) : (
        <ul className={css.reviews}>
          {reviews?.map(review => (
            <li key={review.id}>
              <p className={css.reviewAuthor}>
                Author: {review.author_details.username}
              </p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Reviews;
