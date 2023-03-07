import { fetchTrending } from 'components/api/api';
import { useEffect, useState } from 'react';
import { TrendingList } from './TrendingList/TrendingList';
import { Loader } from 'components/Loader/Loader';
const Home = () => {
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const handleFetchTrending = async () => {
      setIsLoading(true);
      const data = await fetchTrending();
      setTrending(data.results);
      setIsLoading(false);
    };
    handleFetchTrending();
  }, []);

  // handleFetchTrending();
  return (
    <>
      {isLoading && <Loader />}
      <TrendingList data={trending} />
    </>
  );
};
export default Home;
