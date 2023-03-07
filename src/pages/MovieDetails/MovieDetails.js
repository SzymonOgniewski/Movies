import { useEffect, useState } from 'react';
import { fetchMovieDetails } from 'components/api/api';
import {
  useParams,
  NavLink,
  Outlet,
  useLocation,
  Link,
} from 'react-router-dom';
import css from './movieDetails.module.css';
export const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const handleUserScore = () => {
    const score = details.vote_average;
    const percent = Number(score * 10);
    return percent?.toFixed(2);
  };

  const handleGenres = () => {
    const genresArr = details.genres;
    const genres = genresArr?.map(genre => genre.name + ', ');
    return genres;
  };
  const handleDate = () => {
    const date = details.release_date;
    const year = date?.substring(0, 4);
    return year;
  };
  useEffect(() => {
    const handleFetchDetails = async () => {
      const data = await fetchMovieDetails(id);
      setDetails(data);
    };
    handleFetchDetails();
  }, [id]);
  return (
    <div>
      <Link to={backLinkHref}>Go back</Link>
      <div className={css.details}>
        <img
          src={
            details.poster_path
              ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
          }
          alt={details.title}
          className={css.detailsPoster}
        />
        <ul className={css.detailsList}>
          <li className={css.detailsItem}>
            <p className={css.title}>
              {details.title} ({handleDate()})
            </p>
            <p className={css.score}>User score: {handleUserScore() + '%'}</p>
          </li>
          <li className={css.detailsItem}>
            <p className={css.overview}>Overview:</p>
            <p>{details.overview}</p>
          </li>
          <li className={css.detailsItem}>
            <p className={css.genres}>Genres:</p>
            <p className={css.genresList}>{handleGenres()}</p>
          </li>
        </ul>
      </div>
      <div className={css.additionalInfo}>
        <h3 className={css.additionalInfoTitle}>Additional info:</h3>
        <ul>
          <li>
            <NavLink
              to={`cast`}
              className={({ isActive }) =>
                isActive ? css.active : css.additionalInfoLink
              }
              state={location.state}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`reviews`}
              className={({ isActive }) =>
                isActive ? css.active : css.additionalInfoLink
              }
              state={location.state}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
