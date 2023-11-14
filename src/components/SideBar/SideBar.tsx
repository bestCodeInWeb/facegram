import { NavLink } from 'react-router-dom';
import './SideBar.scss';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${isActive ? 'nav_link active' : 'nav_link'}`;

export const SideBar = () => {
  return (
    <div className="sidebar">
      <ul className="nav_list">
        <li className="nav_item">
          <NavLink
            to="/profile/2"
            className={getLinkClass}
          >
            Profile
          </NavLink>
        </li>
      
        <li className="nav_item">
          <NavLink
            to="/news"
            className={getLinkClass}
          >
            News
          </NavLink>
        </li>

        <li className="nav_item">
          <NavLink
            to="/messages"
            className={getLinkClass}
          >
            Messages
          </NavLink>
        </li>

        <li className="nav_item">
          <NavLink
            to="/people"
            className={getLinkClass}
          >
            People
          </NavLink>
        </li>

        <li className="nav_item">
          <NavLink
            to="/friends"
            className={getLinkClass}
          >
            Friends
          </NavLink>
        </li>
      
        <li className="nav_item">
          <NavLink
            to="/music"
            className={getLinkClass}
          >
            Music
          </NavLink>
        </li>

        <li className="nav_item">
          <NavLink
            to="/games"
            className={getLinkClass}
          >
            Games
          </NavLink>
        </li>

        <li className="nav_item">
          <NavLink
            to="/settings"
            className={getLinkClass}
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
