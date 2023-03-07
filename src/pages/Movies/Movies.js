import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { fetchSearching } from 'components/api/api';
import { Loader } from 'components/Loader/Loader';
import css from './movies.module.css';
const Movies = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSerchParams] = useSearchParams({
    query: '',
  });
  const currentSearch = searchParams.get('query');
  const handleChange = e => {
    setSearchQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (currentSearch === searchQuery) return;
    setSerchParams({ query: searchQuery });
    setSearchQuery('');
  };
  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      const getMovies = await fetchSearching(currentSearch);
      setFetchedMovies(getMovies);
      setIsLoading(false);
    };
    fetchMovies();
  }, [currentSearch]);

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className={css.input}
            onChange={handleChange}
            type="text"
            name="searchQuery"
            value={searchQuery}
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            required
          />
          <button type="submit" className={css.button}>
            Search
          </button>
        </form>
      </div>
      <div>
        <ul className={css.list}>
          {isLoading ? (
            <Loader />
          ) : (
            fetchedMovies.results?.map(item => (
              <li key={item.id}>
                <Link
                  to={`${item.id}`}
                  className={css.link}
                  state={{ from: location }}
                >
                  {item.title}
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
      <Suspense
        fallback={
          <div style={{ color: 'ghostwhite', fontSize: '36px' }}>
            Loading...
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
export default Movies;
