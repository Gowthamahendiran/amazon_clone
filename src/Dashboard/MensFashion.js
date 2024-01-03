
// import React, { useState, useEffect } from "react";
// import "./MakeupProducts.css"; // Import your CSS file for styling

// const MensFashion = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/fashion-products");
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

// export default MensFashion;




// MensFashion.js
import React, { useState, useEffect } from "react";
import "./MakeupProducts.css";
import Filter from "./Filter"; // Import your Filter component

const MensFashion = () => {
  const [images, setImages] = useState([]);
  const [filters, setFilters] = useState({ mens: false, womens: false, priceRange: null, search: "" });

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Modify the fetch URL based on your filters
        const filterParams = new URLSearchParams(filters);
        const response = await fetch(`http://localhost:5000/api/fashion-products?${filterParams}`);
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
    <div className="page-container">
      <Filter handleFilterChange={handleFilterChange} />
      <div className="cardd-container">
        {images.map((image) => (
          <div key={image._id} className="cardd">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MensFashion;
