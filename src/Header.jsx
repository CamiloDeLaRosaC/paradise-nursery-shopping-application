import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from './CartSlice.jsx';

function Header() {
  const cartCount = useSelector(selectCartCount);

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Paradise Nursery home">
        <span className="brand-mark" aria-hidden="true">✦</span>
        <span>Paradise <strong>Nursery</strong></span>
      </Link>
      <nav aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink className="cart-link" to="/cart" aria-label={`Cart with ${cartCount} items`}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 3h2l2.1 10.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L20 7H6M10 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm9 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
          </svg>
          <span className="cart-label">Cart</span>
          <span className="cart-count" aria-live="polite">{cartCount}</span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
