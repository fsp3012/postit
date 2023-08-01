import React, { useContext, useEffect, useState } from "react";
import RootLayout from "../layout/RootLayout";
import edit from "../assets/icons/edit.png";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import AuthContext from "../context/AuthContext";
import { toast } from "react-hot-toast";

const EditStory = () => {
  const { id } = useParams();
  const { token } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [story, setStory] = useState("");

  console.log(id);

  const { data, loading, error } = useFetch(
    `http://127.0.0.1:8000/api/stories/${id}`,
    token
  );

  const navigate = useNavigate();

  console.log(data);
  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setTags(data.tags);
      setStory(data.story);
    }
  }, [data]);

  const updateStory = async (updatedStory) => {
    const res = await fetch(`http://127.0.0.1:8000/api/stories/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(updatedStory),
    });

    if (res.status === 200) {
      toast.success("Updated Successfully!");
      navigate("/my-stories");
    }

    console.log(res.status);
  };

  return (
    <RootLayout>
      <form
        className="mw1240 mx-auto text-start py-4 d-flex flex-column gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = {
            title,
            tags,
            story,
          };
          updateStory(formData);
        }}
      >
        <h1>Edit Story</h1>
        <div className="d-flex align-items-center border rounded-1 px-2">
          {/* <img className="position-absolute bg-white px-2" src={edit} alt="" /> */}
          <label htmlFor="title">Title:</label>
          <input
            className="w-100 px-3 py-2 fw-semibold border-0"
            type="text"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="d-flex align-align-items-center border rounded-1 px-2">
          {/* <img className="position-absolute bg-white px-2" src={edit} alt="" /> */}
          <label htmlFor="tags">Tags:</label>
          <input
            className="w-100 px-3 py-2 fw-semibold border-0"
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => {
              setTags(e.target.value);
            }}
          />
        </div>
        <div className="d-flex align-align-items-center border rounded-1 px-2 ">
          {/* <img className="position-absolute bg-white px-2" src={edit} alt="" /> */}
          <textarea
            className="w-100 px-3 py-2 fw-semibold border-0"
            name=""
            id=""
            cols="30"
            rows="10"
            value={story}
            onChange={(e) => {
              setStory(e.target.value);
            }}
          ></textarea>
        </div>
        <button className="btn bg-blue w-50 text-white mx-auto border-0 rounded-1">
          Update Story
        </button>
      </form>
    </RootLayout>
  );
};

export default EditStory;
