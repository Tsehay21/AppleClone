import React, { Component } from "react";
import logo from "../Resources/apple-responsive-replica-html-css-mar-2020/images/icons/logo-sm.png";
import search from "../Resources/apple-responsive-replica-html-css-mar-2020/images/icons/search-icon-sm.png";
import cart from "../Resources/apple-responsive-replica-html-css-mar-2020/images/icons/cart-sm.png";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="nav-wrapper1 fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="hamburger-icon">☰</span>
            </button>

            {/* <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button> */}
            <Link className="navbar-brand mx-auto" to="/">
              <img src={logo} />
            </Link>
            {/* <img src={"images/icons/logo-sm.png"} /> */}

            {/* <a
              className="fab fa-apple navbar-brand mx-auto"
              style="color: #333;"
            ></a> */}

            {/* <!-- <i className="fa-brands fa-apple"></i> --> */}

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/mac/">
                    Mac
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/iphone/">
                    iphone
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/ipad/">
                    ipad
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/watch/">
                    watch
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/tv/">
                    tv
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/music/">
                    Music
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/support/">
                    Support
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/search/">
                    <img src={search} />
                    {/* <img src="images/icons/search-icon-sm.png" /> */}
                  </Link>
                </li>

                {/* <li className="fas fa-search nav-item nav-link js-scroll-trigger"></li> */}
                {/* <!-- Search icon --> */}

                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/cart/">
                    <img src={cart} />
                    {/* <img src="images/icons/cart-sm.png" /> */}
                  </Link>
                </li>

                {/* <li
                  className="fas fa-bag-shopping nav-item nav-link js-scroll-trigger"
                  style="color: #383838; font-size: 1em;"
                ></li> */}
                {/* <!-- Shopping Bag Icon --> */}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
export default Header;
