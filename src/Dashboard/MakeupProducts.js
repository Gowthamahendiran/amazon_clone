// import React, { useState, useEffect } from "react";

// const MakeupProducts = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/makeup-products");
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
//   }, []);

//   return (
//     <div>
//       {images.map((image) => (
//         <div key={image._id}>
//           <h2>{image.title}</h2>
//           <p>Description: {image.description}</p>
//           <p>Price: {image.price}</p>
//           <img
//             src={`http://localhost:5000/uploads/${image.imageData}`}
//             alt={image.title}
//             style={{ maxWidth: "200px", maxHeight: "200px" }}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MakeupProducts;


// import React, { useState, useEffect } from "react";
// import "./MakeupProducts.css"; // Import your CSS file for styling

// const MakeupProducts = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/makeup-products");
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
//   }, []);

//   return (
//     <div>
//         <br />

//     <div className="cardd-container">
//       {images.map((image) => (
//         <div key={image._id} className="cardd">
//           <div className="cardd-image">
//             <img
//               src={`http://localhost:5000/uploads/${image.imageData}`}
//               alt={image.title}
//               className="imagee"
//             />
//           </div>
//           <div className="cardd-content">
//             <h2>{image.title}</h2>
//             <p className="description">Description: {image.description}</p>
//             <p className="price">Price: {image.price}$</p>
//           </div>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default MakeupProducts;




// // MakeupProducts.js
// import React, { useState, useEffect } from "react";
// import "./MakeupProducts.css";
// import Filter from "./Filter"; // Import your Filter component
// import { Link } from "react-router-dom";

// const MakeupProducts = () => {
//   const [images, setImages] = useState([]);
//   const [filters, setFilters] = useState({ mens: false, womens: false, priceRange: null, search: "" });

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         // Modify the fetch URL based on your filters
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
//     <br />
//     <div className="page-container">
//       <Filter handleFilterChange={handleFilterChange} />
//       <div className="cardd-container">
//         {images.map((image) => (
//           <Link key={image._id} to={`/product/${image._id}`}>
//           <div key={image._id} className="cardd">
//             <div className="cardd-image">
//               <img
//                 src={`http://localhost:5000/uploads/${image.imageData}`}
//                 alt={image.title}
//                 className="imagee"
//               />
//             </div>
//             <div className="cardd-content">
//               <h2>{image.title}</h2>
//               <p className="description">Description: {image.description}</p>
//               <p className="price">Price: {image.price}$</p>
//             </div>
//           </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default MakeupProducts;




// // MakeupProducts.js
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import "./MakeupProducts.css";
// import Filter from "./Filter";

// const MakeupProducts = () => {
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
//             <Link key={image._id} to={`/product/${image._id}`}>
//               {/* Use Link to navigate to the product detail page */}
//               <div className="cardd">
//                 <div className="cardd-image">
//                   <img
//                     src={`http://localhost:5000/uploads/${image.imageData}`}
//                     alt={image.title}
//                     className="imagee"
//                   />
//                 </div>
//                 <div className="cardd-content">
//                   <h2>{image.title}</h2>
//                   <p className="description">Description: {image.description}</p>
//                   <p className="price">Price: {image.price}$</p>
//                 </div>
//               </div>
//             </Link>
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
import StarRating from "./StarRating"

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

  return (
    <>
      <br />
      <div className="page-container">
        <Filter handleFilterChange={handleFilterChange} />
        <div className="cardd-container">
          {images.map((image) => (
            <div
              key={image._id}
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
                <h2>{image.title}</h2>
                <p className="description">Description: {image.description}</p>
                <p className="price">Price: {image.price}$</p>
                
                <StarRating rating={image.rating} />
                <p className="rated">{image.rated}</p>
                <p className="used">{image.used}</p>

              </div>
              <Link to={`/product/${image._id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MakeupProducts;
