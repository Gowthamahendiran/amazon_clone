import React from "react";
import Header from "./Main/Header";
import Footer from "./Main/Footer";
import { Route,Routes } from "react-router-dom";
import Sample from "./Dashboard/Sample";
import HeaderTwo from "./Main/HeaderTwo";
const App = () => {
  return(
    <div>
      <Header />
      <HeaderTwo />
      <Routes>
        <Route path="/NotFound" element={<Sample />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App