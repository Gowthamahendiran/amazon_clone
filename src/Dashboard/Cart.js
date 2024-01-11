// Cart.js
import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Cart Page</h2>
      {/* Display the cart items here */}
      {cartItems && cartItems.map((item) => (
        <div key={item.productId}>
          <p>{item.quantity} x {item.title} - &#8377;{item.totalPrice}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
