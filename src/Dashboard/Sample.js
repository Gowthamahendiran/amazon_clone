// import React, { useRef, useState } from "react";
// import "./SampleC.css";
// import SampleImage1 from "../Img/SampleOne.jpg";
// import SampleImage2 from "../Img/SampleTwo.jpg";
// import SampleImage3 from "../Img/ImageThree.jpg";
// import SampleImage4 from "../Img/ImageFour.jpg";
// import { FaArrowLeft } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";
// import SampleImage5 from "../Img/SampleFive.png";
// import SampleImage6 from "../Img/SampleSix.png";
// import "./Card.css"
// const Sample = () => {
//   const containerRef = useRef(null);
//   const [currentImage, setCurrentImage] = useState(0);

//   const scrollLeft = () => {
//     setCurrentImage((prevImage) => (prevImage > 0 ? prevImage - 1 : 3));
//   };

//   const scrollRight = () => {
//     setCurrentImage((prevImage) => (prevImage < 3 ? prevImage + 1 : 0));
//   };

//   const transformValue = `translateX(${-currentImage * 100}%)`;

//   return (
//     <div className="SamplePage">
//       <div className="SampleImagesContainer" style={{ transform: transformValue }} ref={containerRef}>
//         <img src={SampleImage1} alt="SampleImageOne" className="SampleImages" />
//         <img src={SampleImage2} alt="SampleImageTwo" className="SampleImages" />
//         <img src={SampleImage3} alt="SampleImageThree" className="SampleImages" />
//         <img src={SampleImage4} alt="SampleImageFour" className="SampleImages" />
//       </div>

//       <div className="NavigationArrows LeftArrow" onClick={scrollLeft}>
//         {<FaArrowLeft />}
//       </div>
//       <div className="NavigationArrows RightArrow" onClick={scrollRight}>
//         {<FaArrowRight />}
//       </div>
//       <div className="Card">
//         <br />
//       <img src={SampleImage5} alt="SampleImage" className="CardImage" />
//       <div className="CardContent">
//         <a href="/linkone">See More</a>
//       </div>
//     </div>
//     <div className="Card">
//         <br />
//       <img src={SampleImage5} alt="SampleImage" className="CardImage" />
//       <div className="CardContent">
//         <a href="/linkone">See More</a>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Sample;


// Add these code to your Sample.js file

import React, { useRef, useState } from "react";
import "./SampleC.css";
import SampleImage1 from "../Img/SampleOne.jpg";
import SampleImage2 from "../Img/SampleTwo.jpg";
import SampleImage3 from "../Img/ImageThree.jpg";
import SampleImage4 from "../Img/ImageFour.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import SampleImage5 from "../Img/SampleFive.png";
import SampleImage6 from "../Img/SampleSix.png";
import "./Card.css";

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

      <div className="Card">
        <br />
        <h3>Deals Inspired by your Recent History</h3>
        <img src={SampleImage5} alt="SampleImage" className="CardImage" />
        <div className="CardContent">
          <a href="/linkone">See all deals</a>
        </div>
      </div>
      <div className="Card">
        <br />
        <img src={SampleImage5} alt="SampleImage" className="CardImage" />
        <div className="CardContent">
          <a href="/linkone">See all deals</a>
        </div>
      </div>
    </div>
  );
};

export default Sample;
