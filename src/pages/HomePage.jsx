import React, { useEffect, useState, useContext } from "react";
import RootLayout from "../layout/RootLayout";
import AuthContext from "../context/AuthContext";
import { useFetch } from "../hooks/useFetch";
import Loading from "../utils/Loading";
import laptops from "../assets/images/laptops.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { token } = useContext(AuthContext);
  const { data, loading, error } = useFetch(
    "http://127.0.0.1:8000/api/stories/user",
    token
  );
  return (
    <RootLayout>
      {/* <div className="position-relative">
        <img className="w-100" src={rectangle} alt="" />
        <p className="position-absolute top-50 ps-5">Hero Section</p>
      </div> */}
      <div className="hero_section text-start">
        <div className="mx-auto px-4 mw1240">
          <h1 className="fw-bolder py-2">Stay Curious.</h1>
          <p className="fw-semibold">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit magnam ea illum quae sit ad sequi nisi voluptate
            dolores, in ratione accusantium! Eius ullam maxime praesentium quos
            perferendis dignissimos tempore?
          </p>
          <Link to={"/signup"} className="btn btn-bg text-white bg-blue px-4">
            Get Started
          </Link>
        </div>
      </div>
      {/* =============== */}
      <div className="mw1240 mx-auto">
        <div className="border border-light p-2 mt-5 d-flex flex-column gap-2 flex-sm-row">
          {data &&
            data.map((datum) => {
              return (
                <div key={datum.id} className="d-flex align-items-center gap-2">
                  <img className="w-50 h-100 rounded" src={laptops} alt="" />
                  <div className="text-start">
                    <p className="bg-blue text-white rounded px-4 ">
                      {datum.tags}
                    </p>
                    <p>{datum.title}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {loading && <Loading loading={loading} />}
      {/* ================ */}
      {error && <p className="text-danger fw-semibold"> {error}</p>}
      <div className="try-it mx-auto py-4 mw1240 px-3 my-5">
        <h2>
          Try Post<span className="text-blue">It</span>.
        </h2>
        <p>Do you write or discover stories on any topic?</p>
        <div style={{ maxWidth: "600px" }} className="w-100 mx-auto d-flex">
          <input
            type="text"
            className="w-75 border-0 rounded-start px-3"
            placeholder="Enter Email Address"
          />
          <Link
            to={"/signup"}
            className="btn bg-blue text-white w-25 rounded-0 rounded-end fs-4 px-1"
          >
            Get Started
          </Link>
        </div>
      </div>
      {/* ================ */}
    </RootLayout>
  );
};

export default HomePage;
