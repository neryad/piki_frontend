import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo">
          Piu <span>Creativo</span>
        </div>
        <button className="hamburger">☰</button>
        <ul className="nav-menu">
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="#">Catálogo</NavLink>
          </li>
          <li>
            <NavLink to="/recommends">Recomendados</NavLink>
          </li>
          <li>
            <NavLink to="#">Mis Órdenes</NavLink>
          </li>
        </ul>
        <div className="nav-icons">
          <NavLink to="#" className="cart-icon">
            <span>🛒</span>
            <span className="badge">2</span>
          </NavLink>
          <NavLink to="#" className="notification-icon">
            <span>🔔</span>
            <span className="badge">1</span>
          </NavLink>
          <a to="#" className="profile-icon">
            <span>👤</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
