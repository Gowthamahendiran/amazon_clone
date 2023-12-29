import React from "react";
import Header from "./Main/Header";
import Footer from "./Main/Footer";
import { Route,Routes } from "react-router-dom";
import Sample from "./Dashboard/Sample";
import HeaderTwo from "./Main/HeaderTwo";
import FootTwo from "./Main/FootTwo";
const App = () => {
  return(
    <div>
      <Header />
      <HeaderTwo />
      <Routes>
        <Route path="/" element={<Sample />}/>
      </Routes>
      <FootTwo />
      <Footer />
    </div>
  )
}

export default App