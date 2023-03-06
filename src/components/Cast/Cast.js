import { useEffect, useState } from 'react';
import { fetchMovieCredits } from 'components/api/api';
import { useParams } from 'react-router-dom';
import css from './cast.module.css';
export const Cast = () => {
  const [cast, setCast] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const handleFetchCast = async () => {
      const data = await fetchMovieCredits(id);
      setCast(data.cast);
    };
    handleFetchCast();
  }, [id]);
  return (
    <>
      <ul className={css.castList}>
        {cast?.map(item => (
          <li key={item.id} className={css.castListItem}>
            <img
              className={css.profilePoster}
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
              }
              alt={item.name + 'photo'}
            />
            <div className={css.data}>
              <p>{item.name}</p>
              <p>Character: {item.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
