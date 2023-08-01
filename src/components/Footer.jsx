import React from "react";
import { Link } from "react-router-dom";
import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";
import linkedin from "../assets/icons/insta.png";
import arrow from "../assets/images/arrow.png";

const Footer = () => {
  return (
    <div className="main-footer py-4">
      <div className="row mw1240 mx-auto text-lg-start border-bottom border-white">
        <div className="col-lg-4 ps-lg-0">
          <h2 className="">
            About Post<span className="text-blue">it</span>.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam
            pariatur earum quam soluta cum et facere voluptatem aut explicabo ea
            minus eum molestiae dolorum expedita, enim quae architecto magni.
          </p>
        </div>
        <div className="col-lg-2">
          <h2 className="">Quick Menu</h2>
          <div>
            <p>Home</p>
            <p>Stories</p>
            <p>Trending Stories</p>
            <p>Popular Stories</p>
          </div>
        </div>
        <div className="d-flex flex-column gap-3 col-lg-2">
          <Link className="text-decoration-none text-white" to={"/signup"}>
            Sign Up
          </Link>
          <Link className="text-decoration-none text-white" to={"/login"}>
            Login
          </Link>
          <Link className="text-decoration-none text-white" to={"#"}>
            Contact Us
          </Link>
        </div>
        <div className="col-lg-4 pe-lg-0">
          <h2 className="">Subscribe to our newsletter</h2>
          <div className="d-flex justify-content-end mx-auto bg-white p-1 ps-3 w-100 rounded mb-4">
            <input
              placeholder="Enter Email Address"
              className="border-0 w-100"
              type="email"
            />
            <button className="btn text-white bg-blue rounded-1 w-50">
              Subscribe  <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center justify-content-md-end mw1240 mx-auto gap-3">
        <p>Terms and Policy</p>
        <div className="d-flex gap-4 mb-3">
          <img className="bg-dark" src={facebook} alt="" />
          <img className="bg-dark" src={twitter} alt="" />
          <img className="bg-dark" src={linkedin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
