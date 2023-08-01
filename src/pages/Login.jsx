import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser, token } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <div>
      <h1>Welcome Back</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = {
            email,
            password,
          };
          loginUser(formData);
          console.log(formData);
        }}
        className="d-flex flex-column gap-4 px-4 pb-4"
      >
        <div>
          <label className="fw-semibold" htmlFor="email">
            Your Email Address
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border-0 border-bottom border-dark w-100"
            type="email"
          />
        </div>
        <div>
          <label className="fw-semibold" htmlFor="password">
            Password
          </label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border-0 border-bottom border-dark w-100"
            type="password"
          />
        </div>
        <button className="btn bg-blue text-white w-100">Continue</button>
      </form>
      <p className="fw-bold ">
        No account?{" "}
        <Link className="text-blue text-decoration-none" to={"/signup"}>
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
