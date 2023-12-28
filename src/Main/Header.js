import React from "react";
import Logo from "../Img/Re-Mastered.png";
import "./Main.css";
import { FaSearch } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate();
  const HandleSubmit = () => {
    Navigate("/NotFound");
  };

  return (
    <div className="DashboardDivv" >
      <div className="search-box">
        <img src={Logo} className="Logo" alt="Logo Image" />
        <select className="CenterOne">
          <option value="option1">All</option>
          <option value="option2">Option 2</option>
        </select>
        <input type="text" placeholder="Search Amazon.in " className="Searchbar" />
        <button className="SearchIcon">
          <FaSearch />
        </button>
        <button className="Signin" onClick={HandleSubmit}>Sign in</button>
        <button className="Cart"><CiShoppingCart className="CartIcon"/> Cart</button>
      </div>
    </div>
  );
};

export default Header;
