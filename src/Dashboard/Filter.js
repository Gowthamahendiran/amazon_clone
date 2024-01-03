import React, {useState} from "react";
const Filter = ({ handleFilterChange }) => {
        
  return (
    <div className="filter-container">
      <h2>Delivery Day</h2>
      <div>
      <input type="checkbox" onChange={() => handleFilterChange("mens")} />
        <label>Get it by Tommorow</label>
      </div>
      <div>
      <input type="checkbox" onChange={() => handleFilterChange("womens")} />
        <label>Get it in Two Days</label>
      </div>
      <h2>Brand</h2>
      <div>
      <input type="checkbox" onChange={() => handleFilterChange("puma")} />
        <label>Puma</label>
      </div>
      <div>
      <input type="checkbox" onChange={() => handleFilterChange("rebook")} />
        <label>Rebook</label>
      </div>
      <div>
      <input type="checkbox" onChange={() => handleFilterChange("adidas")} />
        <label>Adidas</label>
      </div>
      <div>
      <input type="checkbox" onChange={() => handleFilterChange("miniso")} />
        <label>Miniso</label>
      </div>
      <h2>Price</h2>
      <div>
      <input type="checkbox" onChange={() => handleFilterChange("10k")} />
        <label>10$ - 100$</label>
      </div>
      <div>
      <input type="checkbox" onChange={() => handleFilterChange("100k")} />
        <label>100$ - 200$</label>
      </div>
      <div>
      <input type="checkbox" onChange={() => handleFilterChange("200k")} />
        <label>Above 200$</label>
      </div>
    </div>
  );
};

export default Filter;
