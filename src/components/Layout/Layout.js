import { NavLink, Outlet } from 'react-router-dom';
import css from './layout.module.css';
export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <div className={css.navBar}>
            <div>
              <h1>TMDB API APP</h1>
            </div>
            <nav className={css.nav}>
              <NavLink to="/home" className={css.navLink}>
                Home
              </NavLink>
              <NavLink to="/movies" className={css.navLink}>
                Movies
              </NavLink>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <div className={css.container}>
          <Outlet />
        </div>
      </main>
    </>
  );
};
