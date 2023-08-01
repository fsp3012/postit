import React, { useContext } from "react";
import RootLayout from "../layout/RootLayout";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useFetch } from "../hooks/useFetch";
import Loading from "../utils/Loading";
import { toast } from "react-hot-toast";

const MyStories = () => {
  const { token } = useContext(AuthContext);
  const { data, loading, error } = useFetch(
    "http://127.0.0.1:8000/api/stories/user",
    token
  );

  const navigate = useNavigate();

  const deletePost = async (id) => {
    const res = await fetch(`http://127.0.0.1:8000/api/stories/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
    if (res.status === 200) {
      toast.success("Story Deleted Successfully!");
      setTimeout(() => {
        navigate(0);
      }, 2000);
    }
  };
  return (
    <RootLayout>
      <div className="d-flex justify-content-between align-items-center mw1240 mx-auto py-4">
        <h1>MyStories</h1>
        <Link to={"/create-story"} className="btn bg-dark text-white">
          Write Story
        </Link>
      </div>
      <div className="d-flex mw1240 mx-auto gap-3 border-bottom mb-4">
        <p>All</p>
        <p>Drafts</p>
        <p>Published</p>
      </div>
      <div className="mw1240 mx-auto">
        {data &&
          data.map((datum) => {
            return (
              <div
                key={datum.id}
                className="d-flex justify-content-between align-items-start text-start"
              >
                <div>
                  <p className="fw-bold fs-5">{datum.title}</p>
                  <p>{datum.story}</p>
                  <img src={datum.image} alt="image" />
                  {/* {console.log(datum.image)} */}
                </div>
                <div className="d-flex gap-3">
                  <Link
                    to={`/edit-story/${datum.id}`}
                    className="btn bg-blue text-white px-md-4"
                  >
                    Edit Post
                  </Link>
                  <button
                    onClick={() => {
                      deletePost(datum.id);
                    }}
                    className="btn border-blue text-blue  px-md-4"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        {<Loading loading={loading} />}
        {error && <p className="text-danger fw-semibold"> {error}</p>}
      </div>
    </RootLayout>
  );
};

export default MyStories;
