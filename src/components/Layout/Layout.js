import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './layout.module.css';
export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <div className={css.navBar}>
            <div>
              <NavLink to="/" className={css.navLink}>
                <h1 className={css.logo}>Movies</h1>
              </NavLink>
            </div>
            <nav className={css.nav}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? css.active : css.navLink
                }
              >
                Home
              </NavLink>
              <NavLink
                to="movies"
                className={({ isActive }) =>
                  isActive ? css.active : css.navLink
                }
              >
                Movies
              </NavLink>
            </nav>
          </div>
        </div>
      </header>
      <div className={css.container}>
        <Suspense
          fallback={
            <div style={{ color: 'ghostwhite', fontSize: '36px' }}>
              Loading...
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
