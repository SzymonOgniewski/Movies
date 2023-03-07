import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Layout } from './Layout/Layout';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { PageNotFound } from 'pages/PageNotFound/PageNotFound';
export const App = () => {
  return (
    <Routes>
      <Route path="/goit-react-hw-05-movies" element={<Layout />}>
        <Route path="/goit-react-hw-05-movies" element={<Home />} />
        <Route path="movies" element={<Movies />}>
          <Route path=":id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
