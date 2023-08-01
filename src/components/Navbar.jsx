import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const {token, logoutUser} = useContext(AuthContext)
  return (
    <div className="d-flex py-3 mw1240 justify-content-between align-items-center mx-auto">
      <Link
        className="text-decoration-none text-dark fw-semibold fs-2"
        to={"/"}
      >
        Post<span className="text-blue">it</span>.
      </Link>
      <div className="d-flex align-items-center gap-3">
        <Link to={'/dashboard'} className="text-decoration-none text-dark fw-semibold">
          Stories
        </Link>
        <Link className="text-decoration-none text-dark fw-semibold">
          Contact
        </Link>
        {token ? (
          <Link className="btn btn-danger px-4" onClick={()=>{
            logoutUser()
          }}>Logout</Link>
        ) : (
          <div className="d-flex align-items-center gap-3">
            <Link
              className="text-decoration-none text-blue fw-semibold"
              to={"/login"}
            >
              Sign In
            </Link>
            <Link
              className="btn bg-blue text-white text-decoration-none text-dark fw-semibold"
              to={"/signup"}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
