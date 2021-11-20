import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink exact="true" to="/" className="link">
      Home
    </NavLink>
    <NavLink to="/movies" className="link">
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
