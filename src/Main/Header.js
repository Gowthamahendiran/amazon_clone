// import React from "react";
// import Logo from "../Img/Re-Mastered.png";
// import "./Main.css";
// import { FaSearch } from "react-icons/fa";
// import { CiShoppingCart } from "react-icons/ci";

// import { useNavigate } from "react-router-dom";

// const Header = () => {
//   const Navigate = useNavigate();
//   const HandleSubmit = () => {
//     Navigate("/");
//   };

//   return (
//     <div className="DashboardDivv" >
//       <div className="search-box">
//         <img src={Logo} className="Logo" alt="Logo Image" />
//         <input type="text" placeholder="Search Amazon.in " className="Searchbar" />
//         <button className="SearchIcon">
//           <FaSearch />
//         </button>
//         <button className="Signin" onClick={HandleSubmit}>Sign in</button>
//         <button className="Cart"><CiShoppingCart className="CartIcon"/> Cart</button>
//       </div>
//     </div>
//   );
// };

// export default Header;



import React, { useState } from "react";
import Logo from "../Img/Re-Mastered.png";
import "./Main.css";
import { FaSearch } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Navigate to the search results page with the search query as a parameter
    navigate(`/search-results?query=${searchQuery}`);
  };

  return (
    <div className="DashboardDivv">
      <div className="search-box">
        <img src={Logo} className="Logo" alt="Logo Image" />
        <input
          type="text"
          placeholder="Search Amazon.in "
          className="Searchbar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="SearchIcon" onClick={handleSubmit}>
          <FaSearch />
        </button>
        <button className="Signin" onClick={() => navigate("/")}>
          Sign in
        </button>
        <button className="Cart">
          <CiShoppingCart className="CartIcon" /> Cart
        </button>
      </div>
    </div>
  );
};

export default Header;
