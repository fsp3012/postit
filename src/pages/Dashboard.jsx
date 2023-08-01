import React, { useContext, useEffect } from "react";
import RootLayout from "../layout/RootLayout";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import people_img from "../assets/images/people_img.png";

const Dashboard = () => {
  const { user, getCurrentUser } = useContext(AuthContext);
  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <RootLayout>
      <div className="d-flex flex-column flex-md-row mw1240 mx-auto">
        <div className="text-md-start">
          <h1>Welcome {user && user.username}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quas
            eum repudiandae temporibus quae, dolores aliquam nulla culpa
            quibusdam harum facilis. Commodi itaque praesentium odio corporis,
            fugit rem? Modi, iure.
          </p>
          <div className="d-flex justify-content-center justify-content-md-start gap-3">
            <Link to={'/my-stories'} className="btn bg-blue text-white px-4 px-lg-5">
              My Stories
            </Link>
            <Link to={'/feeds'} className="btn text-blue border-blue px-4 px-lg-5">
              {" "}
              Go to Feed
            </Link>
          </div>
        </div>
        <img className="w-50 mx-auto" src={people_img} alt="" />
      </div>
    </RootLayout>
  );
};

export default Dashboard;
