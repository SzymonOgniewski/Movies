import { Link } from 'react-router-dom';
import css from './trendingList.module.css';
export const TrendingList = ({ data }) => {
  return (
    <>
      <h2 className={css.listTitle}>Trending today:</h2>

      <ul className={css.list}>
        {data.map(item => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`} className={css.listItem}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
