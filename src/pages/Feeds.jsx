import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import people_img from "../assets/images/people_img.png";
import { useFetch } from "../hooks/useFetch";
import AuthContext from "../context/AuthContext";
import Loading from "../utils/Loading";
import tennis from "../assets/images/tennis.png";

const Feeds = () => {
  const { data, loading, error } = useFetch(
    "http://127.0.0.1:8000/api/stories/"
  );

  const { token } = useContext(AuthContext);
  console.log(data);
  return (
    <RootLayout>
      <div className="d-flex flex-column flex-md-row mw1240 mx-auto">
        <div className="text-md-start">
          <h1>You've got a story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quas
            eum repudiandae temporibus quae, dolores aliquam nulla culpa
            quibusdam harum facilis. Commodi itaque praesentium odio corporis,
            fugit rem? Modi, iure.
          </p>
          {/* <div className="d-flex justify-content-center justify-content-md-start gap-3">
            <Link
              to={"/my-stories"}
              className="btn bg-blue text-white px-4 px-lg-5"
            >
              My Stories
            </Link>
            <Link
              to={"/feeds"}
              className="btn text-blue border-blue px-4 px-lg-5"
            >
              {" "}
              Go to Feed
            </Link>
          </div> */}
        </div>
        <img className="w-50 mx-auto" src={people_img} alt="" />
      </div>
      {/* ==================================================== */}
      {data && (
        <div className="row mw1240 mx-auto gap-2 py-5">
          {data.map((datum) => {
            return (
              <div key={datum.id} className="col-md-5 col-lg-3 text-start">
                <div className="position-relative">
                  <img className="w-100" src={tennis} alt="" />
                  <p
                    style={{ bottom: "10px", left: "10px" }}
                    className="position-absolute bg-blue text-white px-3 rounded"
                  >
                    {datum.tags}
                  </p>
                </div>
                <div className="py-2">
                  {" "}
                  <h3>{datum.title} </h3>
                  <p>By {datum.author.username} - {datum.created_at} </p>
                  <p>{datum.story} </p>
                </div>
              </div>
            );
          })}{" "}
        </div>
      )}
      {/* ===================================================== */}

      {<Loading loading={loading} />}
      {error && <p className="text-danger fw-semibold"> {error}</p>}
    </RootLayout>
  );
};

export default Feeds;
