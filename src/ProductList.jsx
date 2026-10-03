import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header.jsx';
import { addItem, selectCartItems } from './CartSlice.jsx';
import { plantCategories } from './data/plants.js';

function ProductCard({ plant, onAdd }) {
  const isInCart = useSelector((state) =>
    state.cart.items.some((item) => item.id === plant.id),
  );

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={plant.image} alt={`${plant.name} houseplant`} loading="lazy" />
        <span className="light-badge">{plant.light}</span>
      </div>
      <div className="product-info">
        <div>
          <h3>{plant.name}</h3>
          <p className="price">${plant.price.toFixed(2)}</p>
        </div>
        <button
          className="add-button"
          type="button"
          disabled={isInCart}
          onClick={() => onAdd(plant)}
        >
          {isInCart ? 'Added ✓' : 'Add to Cart'}
        </button>
      </div>
    </article>
  );
}

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [notice, setNotice] = useState('');

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setNotice(`${plant.name} added to your cart.`);
    window.setTimeout(() => setNotice(''), 1800);
  };

  return (
    <div className="page-shell">
      <Header />
      <main className="catalog-page">
        <section className="catalog-hero">
          <p className="eyebrow">The indoor collection</p>
          <h1>Find your perfect plant.</h1>
          <p>Beautiful greenery, selected for real homes and every level of plant experience.</p>
          <span>{plantCategories.flatMap((category) => category.plants).length} plants · {plantCategories.length} collections</span>
        </section>

        {plantCategories.map((category, categoryIndex) => (
          <section className="category-section" key={category.name} aria-labelledby={`category-${categoryIndex}`}>
            <div className="category-heading">
              <div>
                <p className="category-number">0{categoryIndex + 1}</p>
                <h2 id={`category-${categoryIndex}`}>{category.name}</h2>
              </div>
              <p>{category.description}</p>
            </div>
            <div className="product-grid">
              {category.plants.map((plant) => (
                <ProductCard key={plant.id} plant={plant} onAdd={handleAdd} />
              ))}
            </div>
          </section>
        ))}
      </main>
      <div className={`toast ${notice ? 'visible' : ''}`} role="status" aria-live="polite">
        {notice} {cartItems.length > 0 && <span>Happy growing!</span>}
      </div>
      <footer><span>Paradise Nursery</span><span>Rooted in good living.</span></footer>
    </div>
  );
}

export default ProductList;
