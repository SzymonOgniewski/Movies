import { fetchTrending } from 'components/api/api';
import { useEffect, useState } from 'react';
import { TrendingList } from './TrendingList/TrendingList';

export const Home = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    const handleFetchTrending = async () => {
      const data = await fetchTrending();
      setTrending(data.results);
    };
    handleFetchTrending();
  }, []);

  // handleFetchTrending();
  return (
    <>
      <TrendingList data={trending} />
    </>
  );
};
