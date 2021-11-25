import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      className="link"
      style={({ isActive }) => {
        return {
          color: isActive ? '#1e90ff' : 'dimgrey',
        };
      }}
    >
      Home
    </NavLink>
    <NavLink
      to="/movies"
      className="link"
      style={({ isActive }) => {
        return {
          color: isActive ? '#1e90ff' : 'dimgrey',
        };
      }}
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
