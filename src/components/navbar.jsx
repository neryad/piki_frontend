const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="container navbar-content">
        <div class="logo">
          Piu <span>Creativo</span>
        </div>
        <button class="hamburger">☰</button>
        <ul class="nav-menu">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Catálogo</a>
          </li>
          <li>
            <a href="#">Recomendados</a>
          </li>
          <li>
            <a href="#">Mis Órdenes</a>
          </li>
        </ul>
        <div class="nav-icons">
          <a href="#" class="cart-icon">
            <span>🛒</span>
            <span class="badge">2</span>
          </a>
          <a href="#" class="notification-icon">
            <span>🔔</span>
            <span class="badge">1</span>
          </a>
          <a href="#" class="profile-icon">
            <span>👤</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
