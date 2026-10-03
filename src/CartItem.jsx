import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header.jsx';
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from './CartSlice.jsx';

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const itemCount = useSelector(selectCartCount);
  const subtotal = useSelector(selectCartTotal);
  const [checkoutMessage, setCheckoutMessage] = useState('');

  const shipping = subtotal > 0 ? 8 : 0;
  const total = subtotal + shipping;

  return (
    <div className="page-shell">
      <Header />
      <main className="cart-page">
        <section className="cart-heading">
          <p className="eyebrow">Your leafy picks</p>
          <h1>Shopping Cart</h1>
          <p><strong>{itemCount}</strong> {itemCount === 1 ? 'plant' : 'plants'} ready to come home.</p>
        </section>

        {items.length === 0 ? (
          <section className="empty-cart">
            <div aria-hidden="true">♧</div>
            <h2>Your cart is ready to grow.</h2>
            <p>Explore the collection and pick a new leafy companion.</p>
            <Link className="primary-button dark" to="/plants">Browse Plants →</Link>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items" aria-label="Cart items">
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={`${item.name} houseplant`} />
                  <div className="cart-item-details">
                    <div>
                      <p className="cart-item-label">Houseplant</p>
                      <h2>{item.name}</h2>
                      <p>${item.price.toFixed(2)} each</p>
                    </div>
                    <button className="remove-button" type="button" onClick={() => dispatch(removeItem(item.id))}>
                      Remove
                    </button>
                  </div>
                  <div className="quantity-control" aria-label={`Quantity of ${item.name}`}>
                    <button type="button" onClick={() => dispatch(decreaseQuantity(item.id))} aria-label={`Decrease ${item.name} quantity`}>−</button>
                    <span aria-live="polite">{item.quantity}</span>
                    <button type="button" onClick={() => dispatch(increaseQuantity(item.id))} aria-label={`Increase ${item.name} quantity`}>+</button>
                  </div>
                  <p className="item-total" aria-label={`Total for ${item.name}`}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </article>
              ))}
            </section>

            <aside className="order-summary">
              <p className="eyebrow">Order summary</p>
              <h2>Good choices.</h2>
              <div className="summary-row"><span>Plants ({itemCount})</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="summary-row"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
              <div className="summary-total"><span>Total</span><strong>${total.toFixed(2)}</strong></div>
              <button className="checkout-button" type="button" onClick={() => setCheckoutMessage('Checkout is coming soon! Your plants are saved in the cart.')}>
                Checkout
              </button>
              {checkoutMessage && <p className="checkout-message" role="status">{checkoutMessage}</p>}
              <Link className="continue-button" to="/plants">← Continue Shopping</Link>
            </aside>
          </div>
        )}
      </main>
      <footer><span>Paradise Nursery</span><span>Rooted in good living.</span></footer>
    </div>
  );
}

export default CartItem;
