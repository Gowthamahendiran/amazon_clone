import React from "react";
import "./MainFoot.css"
const Footer = () => {
    return(
        <div className="MainFoot">
        <div className="HorizontalList">
        <div>
          <h2>AbeBooks</h2>
        <ul>
            <li>
            Books
            </li>
            <li>Art</li>
            <li>collectibles</li>
        </ul>
        </div>
        <div>
          <p>Amazon Web Services</p>
          <p>Scalable Cloud Computing Services</p>
        </div>
        <div>
          <p>Audible</p>
          <p>Download Audio Books</p>
        </div>
      </div>
            <div className="FootLinks">
            <a href="/FooterOne" className="Cond">Conditions of Use & Sales</a>
            <a href="/FooterTwo" className="Pri">Privacy Notice</a>
            <a href="/FooterThree" className="Int">Interest-Based Ads</a>
            </div>
            <h2 className="FooterCopy">© 1996-2023, Amazon.com, Inc. or its affiliates</h2>
        </div>
    )
}

export default Footer