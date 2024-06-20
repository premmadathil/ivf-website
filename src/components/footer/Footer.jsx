import React, { Fragment, useEffect, useState } from "react";
import "./footer.css";
import footerLogo from "../../assets/images/footer-logo.png";
import phoneIcon from "../../assets/images/phone.svg";
import Mail from "../../assets/images/mail.svg";
import Facebook from "../../assets/images/Facebook.svg";
import Twitter from "../../assets/images/Twitter.svg";
import Insta from "../../assets/images/Instagram.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY >= 100) {
      setShow(true);
    } else {
      setShow(false);
    }
    setLastScrollY(currentScrollY);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <Fragment>
      <footer className="footer gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img className="img-fluid" src={footerLogo} alt="footerLogo" />
              <ul>
                <li>IVF Division of PRIMS Hospital,</li>
                <li>Sasthamangalam -Vattiyoorkavu Road,</li>
                <li>Near Indian Oil Pump,</li>
                <li>Kanjirampara,</li>
                <li>Trivandrum 695030</li>
                <li>KERALA</li>
              </ul>
            </div>
            <div className="col-lg-4 d-flex contact">
              <div className="ms-auto">
                <h2>Contact us</h2>
                <ul>
                  <li>
                    <img src={phoneIcon} alt="phoneIcon" /> 04712 995006
                  </li>
                  <li>
                    <img src={Mail} alt="phoneIcon" /> trivandrumivf@gmail.com
                  </li>
                </ul>
                <div className="d-flex social-media">
                  <Link className="me-2">
                    <img src={Facebook} alt="Facebook" />
                  </Link>
                  <Link className="me-2">
                    <img src={Insta} alt="Insta" />
                  </Link>
                  <Link>
                    <img src={Twitter} alt="Twitter" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex quick-links">
              <div className="ms-auto">
                <h2>quick links</h2>
                <ul>
                  <li>
                    <Link onClick={scrollToTop} className="nav-link" to={"/"}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollToTop}
                      className="nav-link"
                      to={"/about-us"}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={scrollToTop}
                      className="nav-link"
                      to={"/explore"}
                    >
                      Explore
                    </Link>
                  </li>

                  <li>
                    <Link onClick={scrollToTop} className="nav-link" to={"/"}>
                      book now
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={scrollToTop}
          className={show ? "click-to-top visible" : "click-to-top hidden"}
        >
          <i className="ri-arrow-drop-up-line"></i>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
