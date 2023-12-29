import React, { useRef, useState } from "react";
import "./SampleC.css";
import SampleImage1 from "../Img/SampleOne.jpg";
import SampleImage2 from "../Img/SampleTwo.jpg";
import SampleImage3 from "../Img/ImageThree.jpg";
import SampleImage4 from "../Img/ImageFour.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Bazzar from "../Img/Value_Barzer.jpg";
import SmartGad from "../Img/Smart_Gadgets.jpg";
import Fashion from "../Img/Fashion.jpg"
import HomeEss from "../Img/Home_Essentials.jpg"
import "./Card.css";
import SampleTwo from "./SampleTwo.js"
import OnePlus from "../Img/OnePlus.jpg"
import OnePlusCard from "./OnePlus.js"

const Sample = () => {
  const containerRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  const scrollLeft = () => {
    setCurrentImage((prevImage) => (prevImage > 0 ? prevImage - 1 : 3));
  };

  const scrollRight = () => {
    setCurrentImage((prevImage) => (prevImage < 3 ? prevImage + 1 : 0));
  };

  const transformValue = `translateX(${-currentImage * 100}%)`;

  return (
    <div className="SamplePage">  
      <div className="SampleImagesContainer" style={{ transform: transformValue }} ref={containerRef}>
        <img src={SampleImage1} alt="SampleImageOne" className="SampleImages" />
        <img src={SampleImage2} alt="SampleImageTwo" className="SampleImages" />
        <img src={SampleImage3} alt="SampleImageThree" className="SampleImages" />
        <img src={SampleImage4} alt="SampleImageFour" className="SampleImages" />
      </div>

      <div className="NavigationArrows LeftArrow" onClick={scrollLeft}>
        {<FaArrowLeft />}
      </div>
      <div className="NavigationArrows RightArrow" onClick={scrollRight}>
        {<FaArrowRight />}
      </div>
      <br />
      <br />
      <div className="Card">
        <br />
        <h3>Make up Products</h3>
        <img src={Fashion} alt="SampleImage" className="CardImage" />
        <div className="CardContent">
          <a href="/linkone">See all deals</a>
        </div>
      </div>

      <div className="Card">
        <br />
        <h3>Home Essentials</h3>
        <img src={HomeEss} alt="SampleImage" className="CardImage" />
        <div className="CardContent">
          <a href="/linkone">See all deals</a>
        </div>
      </div>


      
      <div className="Card">
        <br />
        <h3>Smart Gadgets for Smart People</h3>
        <img src={SmartGad} alt="SampleImage" className="CardImage" />
        <div className="CardContent">
          <a href="/linkone">See all deals</a>
        </div>
      </div>


      <div className="Card">
        <br />
        <h3>Value Bazzar</h3>
        <img src={Bazzar} alt="SampleImage" className="CardImage" />
        <div className="CardContent">
          <a href="/linkone">See all deals</a>
        </div>
      </div>


      <br />
      <br />
      <SampleTwo />
      <br />
      <br />
      <img src={OnePlus} alt="One Plus" className="OnePlusImage" />
      <br />
      <OnePlusCard />
    </div>
  );
};

export default Sample;
