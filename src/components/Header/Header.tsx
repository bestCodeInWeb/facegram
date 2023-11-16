import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { initCurrentUser, logout } from '../../api/auth';
import { logoutCreator, setAuthUserData } from '../../redux/authReducer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import './Header.scss';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${isActive ? 'nav-link footer-active' : 'nav-link'}`;

export const Header = () => {
  const isAuth = useAppSelector(state => state.auth.isAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    initCurrentUser()
      .then(response => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;

          if (id && email && login) {
            dispatch(setAuthUserData(id, email, login));
          }
        }
      })
  }, []);

  const logoutHandler = () => {
    logout()
     .then(() => {
       dispatch(logoutCreator());
     })
  }

  return (
    <header className="header bg-primary">
      <div className="header-container">
        <Link to="/news" className="logo">
          FaceGram
        </Link>

        {isAuth ? (
          <button className="btn btn-danger" onClick={logoutHandler}>
            Logout
          </button>
        ) : (
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink to="/login" className={getLinkClass}>
                  Login
                </NavLink>
              </li>
            </ul >
        )}
      </div>
    </header>
  );
}
