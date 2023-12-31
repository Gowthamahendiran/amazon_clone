// ProductDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css"
import StarRating from "./StarRating"


const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); 
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/makeup-products/${productId}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          console.error("Failed to fetch product:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Add your logic to handle adding the product to the cart
    console.log(`Added ${quantity} ${product.title} to cart`);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="image-container">
        <img
          src={`http://localhost:5000/uploads/${product.imageData}`}
          alt={product.title}
          style={{ maxWidth: "400px" }}
        />
      </div>
      <div className="content-container">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="Prod-detail-p">&#8377; {product.price}</p>
        <p><StarRating rating={product.rating}/>{product.rated}</p>
        <p>{product.used}</p>
        <div className="quantity-container">
          <button onClick={handleDecreaseQuantity} className="MinusButton">-</button>
          <span className="Quality">{quantity}</span>
          <button onClick={handleIncreaseQuantity} className="PlusButton">+</button>
        </div>
        <br />
        <button onClick={handleAddToCart} className="AddButton">Add to Cart</button>
        <button className="BuyButton">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetail;
