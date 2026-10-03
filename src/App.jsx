import { Link, Navigate, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';

function LandingPage() {
  return (
    <main className="landing-page">
      <div className="landing-overlay" />
      <div className="landing-content">
        <section className="hero-copy" aria-labelledby="hero-title">
          <p className="eyebrow light">Plants for every kind of light</p>
          <h1 id="hero-title">Paradise<br /><em>Nursery</em></h1>
          <p className="hero-intro">
            Bring your rooms to life with thoughtfully selected houseplants,
            from resilient first plants to unforgettable leafy statements.
          </p>
          <Link className="primary-button" to="/plants">
            Get Started <span aria-hidden="true">→</span>
          </Link>
        </section>
        <AboutUs />
      </div>
      <p className="scroll-note" aria-hidden="true">Scroll into something greener</p>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
