import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const { signUpUser, token } = useContext(AuthContext);

  useEffect(()=>{
    if(token){
      navigate('/dashboard')
    }
  }, [])
  return (
    <div>
      <h1>Join Post<span className="text-blue">it</span>.</h1>
      <p>Enter your email address to create an account on Postit.</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = {
            username,
            email,
            password,
          };
          signUpUser(formData);
          console.log(formData);
        }}
        className="px-4 d-flex flex-column gap-4 pb-4"
      >
        <div>
          <label className="fw-semibold" htmlFor="username">
            Username
          </label>
          <input
            className="border-0 border-bottom border-dark w-100"
            type="text"
            id="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <label className="fw-semibold" htmlFor="email">
            Your Email Address
          </label>
          <input
            className="border-0 border-bottom border-dark w-100"
            type="email"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label className="fw-semibold" htmlFor="password">
            Password
          </label>
          <input
            className="border-0 border-bottom border-dark w-100"
            type="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button className="btn bg-blue text-white w-100 fw-bold">
          Continue
        </button>
      </form>
      <p className="fw-bold">
        Already have an account?{" "}
        <Link className="text-blue text-decoration-none" to={"/login"}>
          Sign In
        </Link>{" "}
      </p>
    </div>
  );
};

export default SignUp;

