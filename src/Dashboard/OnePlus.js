import React from "react";
import "./OnePlusC.css"
import OnePlus1 from "../Img/OnePlus1.jpg"
import OnePlus2 from "../Img/OnePlus2.jpg"
import OnePlus3 from "../Img/OnePlus3.jpg"
import OnePlus4 from "../Img/OnePlus4.jpg"
import OnePlus5 from "../Img/OnePlus5.jpg"
import OnePlus6 from "../Img/OnePlus6.jpg"
const OnePlus = () => {
    return(
        <div>   
      <div className="One">
        <br />
        <img src={OnePlus1} alt="SampleImage" className="OneImage" />
        <h5>One Plus Nord CE2 Lite</h5>
      </div>

      <div className="One">
        <br />
        <img src={OnePlus2} alt="SampleImage" className="OneImage" />
        <h5>One Plus Nord 2T</h5>
      </div>

      <div className="One">
        <br />
        <img src={OnePlus3} alt="SampleImage" className="OneImage" />
        <h5>One Plus Nord CE 2</h5>
      </div>

      <div className="One">
        <br />
        <img src={OnePlus4} alt="SampleImage" className="OneImage" />
        <h5>One Plus Nord 2T 5G</h5>
      </div>

      <div className="One">
        <br />
        <img src={OnePlus5} alt="SampleImage" className="OneImage" />
        <h5>One Plus Nord 3 5G</h5>
      </div>    

      <div className="One">
        <br />
        <img src={OnePlus6} alt="SampleImage" className="OneImage" />
        <h5>One Plus Nord 11R</h5>
      </div>
      <br />
      <br />
      <button className="OnePlusButton">Load More One Plus Mobiles</button>
        </div>
    )
}

export default OnePlus