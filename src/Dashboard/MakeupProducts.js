// import React, { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "./MakeupProducts.css";
// import Filter from "./Filter";
// import StarRating from "./StarRating"

// const MakeupProducts = () => {
//   const navigate = useNavigate();
//   const [images, setImages] = useState([]);
//   const [filters, setFilters] = useState({ mens: false, womens: false, priceRange: null, search: "" });

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const filterParams = new URLSearchParams(filters);
//         const response = await fetch(`http://localhost:5000/api/makeup-products?${filterParams}`);
//         if (response.ok) {
//           const data = await response.json();
//           setImages(data);
//         } else {
//           console.error("Failed to fetch images:", response.statusText);
//         }
//       } catch (error) {
//         console.error("Error fetching images:", error);
//       }
//     };

//     fetchImages();
//   }, [filters]);

//   const handleFilterChange = (filterType, value) => {
//     setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
//   };

//   return (
//     <>
//       <br />
//       <div className="page-container">
//         <Filter handleFilterChange={handleFilterChange} />
//         <div className="cardd-container">
//           {images.map((image) => (
//             <div
//               key={image._id}
//               className="cardd"
//               style={{ cursor: "pointer" }}
//             >
//               <div className="cardd-image">
//                 <img
//                   src={`http://localhost:5000/uploads/${image.imageData}`}
//                   alt={image.title}
//                   className="imagee"
//                 />
//               </div>
//               <div className="cardd-content">
//                 <h2>{image.title}</h2>
//                 <p className="price">&#8377; {image.price}</p>
//                 <p><StarRating rating={image.rating} />{image.rated} </p>
//                 <p className="rated"></p>
//               </div>
//               <Link to={`/product/${image._id}`} className="LinkView">View Details</Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default MakeupProducts;


import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./MakeupProducts.css";
import Filter from "./Filter";
import StarRating from "./StarRating";

const MakeupProducts = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [filters, setFilters] = useState({ mens: false, womens: false, priceRange: null, search: "" });

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const filterParams = new URLSearchParams(filters);
        const response = await fetch(`http://localhost:5000/api/makeup-products?${filterParams}`);
        if (response.ok) {
          const data = await response.json();
          setImages(data);
        } else {
          console.error("Failed to fetch images:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
  };

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <br />
      <div className="page-container">
        <Filter handleFilterChange={handleFilterChange} />
        <div className="cardd-container" onClick={() => window.scrollTo(0, 0)}>
          {images.map((image) => (
            <Link
              key={image._id}
              to={`/product/${image._id}`}
              className="cardd" 
              style={{ cursor: "pointer" }}
            >
              <div className="cardd-image">
                <img
                  src={`http://localhost:5000/uploads/${image.imageData}`}
                  alt={image.title}
                  className="imagee"
                />
              </div>
              <div className="cardd-content">
                <h2 className="CardTitle">{image.title}</h2>
                <p className="price">&#8377; {image.price}</p>
                <p className="Ratingss"><StarRating rating={image.rating} />{image.rated} </p>
                <p className="rated"></p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MakeupProducts;
