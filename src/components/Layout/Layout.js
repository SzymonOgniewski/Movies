import { NavLink, Outlet } from 'react-router-dom';
import css from './layout.module.css';
export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <div className={css.navBar}>
            <div>
              <NavLink to="/home" className={css.navLink}>
                <h1 className={css.logo}>TMDB API APP</h1>
              </NavLink>
            </div>
            <nav className={css.nav}>
              <NavLink to="/" className={css.navLink}>
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
