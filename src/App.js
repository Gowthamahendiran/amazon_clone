import React from "react";
import Header from "./Main/Header";
import Footer from "./Main/Footer";
import { Route,Routes } from "react-router-dom";
import Sample from "./Dashboard/Sample";
import HeaderTwo from "./Main/HeaderTwo";
import FootTwo from "./Main/FootTwo";
import MakeupProducts from "./Dashboard/MakeupProducts";
import ImageUploadForm from "./Dashboard/ImageUploadForm";
import MensFashion from "./Dashboard/MensFashion";
import SearchResults from "./SearchResults";
import ProductDetail from "./Dashboard/ProductDetail";
import Signin from "./SignIn/Signin";
import Register from "./SignIn/Register";
import Cart from "./Cart/Cart";
import SmartProd from "./Dashboard/SmartProd";
import ValueProd from "./Dashboard/ValueProd";
const App = () => {
  return(
    <div>
      <Header />
      <HeaderTwo />
      <Routes>
        <Route path="/" element={<Sample />}/>
        <Route path="/category/makeup" element={<MakeupProducts />} />
        <Route path="/uploadImage" element={<ImageUploadForm />} />
        <Route path="/category/home-essentials" element={<MensFashion />} />
        <Route path="/category/smart-gadgets" element={<SmartProd />} />
        <Route path="/category/value-bazaar" element={<ValueProd />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <FootTwo />
      <Footer />
    </div>
  )
}

export default App