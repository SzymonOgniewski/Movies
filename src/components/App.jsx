import { Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { Layout } from './Layout/Layout';
import { MovieDetails } from './Movies/MovieDetails/MovieDetails';
import { Movies } from './Movies/Movies';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}>
          <Route path=":id" element={<MovieDetails />}>
            <Route path="cast" />
            <Route path="reviews" />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
