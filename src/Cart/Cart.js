import React, { useState, useEffect } from "react";
import "./Cart.css"
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/cart");
        if (response.ok) {
          const cartData = await response.json();
          setCartItems(cartData);
        } else {
          console.error("Failed to fetch cart data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, []);

  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item._id} className="cart-product-card">
              <div className="cart-card-image">
                <img
                  src={`http://localhost:5000/uploads/${item.image}`}
                  alt={item.title}
                  className="cart-card-image"
                />
              </div>
              <div className="cart-card-details">
                <p className="cart-hthree">{item.title}</p>
                <p className="cart-p">Price: &#8377;{item.price}</p>
                <p className="cart-p">Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
