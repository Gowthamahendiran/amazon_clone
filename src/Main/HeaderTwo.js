import React from "react";
import { Link } from "react-scroll";
import './MainTwo.css'
const HeaderTwo = () => {
    return (
        <div className="DashboardDiv">
            <p></p>
          <ul className="NavListt">
            <li>
              <a href="/">ALL</a>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="Linkto"
              >
                Fresh
              </Link>
            </li>
            <li>
              <Link
                to="product"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="Linkto"
              >
                Amazon Mini TV
              </Link>
            </li>
            <li>
            <Link
                to="more"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="Linkto"
              >
                Sell
              </Link>
            </li>

            <li>
            <Link
                to="Best"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="Linkto"
              >
                Best Sellers
              </Link>
            </li>

            <li>
            <Link
                to="Deal"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="Linkto"
              >
                Today's Deals
              </Link>
            </li>

            <li>
            <Link
                to="Mobiles"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="Linkto"
              >
                Mobiles
              </Link>
            </li>

            <li>
            <Link
                to="Electronics"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="Linkto"
              >
                Electronics
              </Link>
            </li>

            <li>
            <Link
                to="Service"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="Linkto"
              >
                Customer Service
              </Link>
            </li>

            <li>
            <Link
                to="Prime"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="Linkto"
              >
                Prime
              </Link>
            </li>

            <li>
            <Link
                to="New"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="Linkto"
              >
                New Releases
              </Link>
            </li>

            <li>
            <Link
                to="Kitchen"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="Linkto"
              >
                Home and Kitchen
              </Link>
            </li>

            <li>
            <Link
                to="Books"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="Linkto"
              >
                Books
              </Link>
            </li>

            <li>
              <a href="/login">Fashion</a>
            </li>
            <li>
            </li>
          </ul>
        </div>
      );
}

export default HeaderTwo