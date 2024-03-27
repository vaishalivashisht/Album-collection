import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";


const AddAlbum = ({addAlbum}) => {
  const [title, setTitle] = useState("");
  const [userid, setUserid] = useState("");
  // const[photo, setPhoto] = useState([]);
  const navigate = useNavigate();

  const handleTitlechange = (e) => {
    setTitle(e.target.value);
  };
  const handleUseridchange = (e) => {
    setUserid(e.target.value);
  };

  const handleSave = () => {
    console.log("title", title);
    console.log("userid", userid);

    addAlbum({title, userid});
    navigate("/");

    // fetch("https://jsonplaceholder.typicode.com/photos", {
    //   method: "POST",
    //   body: JSON.stringify({ title }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }) 
    // .then((response)=>response.json()) 
    // .then((data)=>{
    //  console.log("data", data);
    //  setPhoto([...photo, data])
    //  navigate("/")

    // })
  }; 

  // console.log("photo", photo);

  return (
    <div className="add-album">
      <div className="info">
        <span>Enter New Title</span>
        <br />
        <input
          type="text"
          value={title}
          onChange={handleTitlechange}
          placeholder="Enter Your User Title"
          className="input-flt"
        />
      </div>

      <div className="info">
        <span>Enter New UserId</span>
        <br />
        <input
          type="text"
          value={userid}
          onChange={handleUseridchange}
          placeholder="Enter Your User Id"
          className="input-flt"
        />
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}; 

export default AddAlbum;
