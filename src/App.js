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
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
      <FootTwo />
      <Footer />
    </div>
  )
}

export default App