import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${isActive ? 'nav-link footer-active' : 'nav-link'}`;

export const Header = () => {
  return (
    <header className="header bg-primary">
      <div className="header-container">
        <Link to="/news" className="logo">
          FaceGram
        </Link>

        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/login" className={getLinkClass}>
              Login
            </NavLink>
          </li>
        
          <li className="nav-item">
            <NavLink to="/register" className={getLinkClass}>
              Registration
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
