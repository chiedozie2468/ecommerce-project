import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "../App.css";

export default function Checkout() {
  const [showPopup, setShowPopup] = useState(false);

  const {
    getCartItemsWithProducts,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    clearCart,
  } = useCart();

  const cartItems = getCartItemsWithProducts();

  const total = getCartTotal();

  function placeOrder() {
    setShowPopup(true);

    setTimeout(() => {
      clearCart();
      setShowPopup(false);
    }, 3000);
  }

  if (cartItems.length === 0) {
    return (
      <div className="page">
        <div className="container">
          <div className="empty-cart">
            <h1>Your cart is empty</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Order Placed!</h2>
            <p>Your order was placed successfully.</p>

            <button onClick={() => setShowPopup(false)}>
              Okay
            </button>
          </div>
        </div>
      )}

      <div className="container">
        <h1 className="page-title">Checkout</h1>

        <div className="checkout-container">
          <div className="checkout-items">
            <h2>Order Summary</h2>

            {cartItems.map((item) => (
              <div key={item.id} className="checkout-item">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                />

                <div className="checkout-item-details">
                  <h3>{item.product.name}</h3>
                  <p>Price: ${item.product.price}</p>
                </div>

                <div className="checkout-item-controls">
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      className="quantity-btn"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>

                  <p className="checkout-total">
                    $
                    {(
                      item.quantity * item.product.price
                    ).toFixed(2)}
                  </p>

                  <button
                    className="btn btn-primary btn-small"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-summary">
            <h2 className="checkout-section-title">Total</h2>

            <div className="checkout-total">
              <p className="checkout-total-label">Subtotal:</p>

              <p className="checkout-total-value checkout-total-final">
                ${total}
              </p>
            </div>

            <button
              className="btn-primary btn-large btn-black"
              onClick={placeOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}