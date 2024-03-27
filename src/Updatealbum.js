import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Updatealbum = ({updateAlbum}) => {

const[title, setTitle] = useState("");
const[userid, setUserid] = useState("");
const {id} = useParams();
const navigate = useNavigate();

useEffect(() => {
  const fetchAlbumData = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch album");
      }
      const data = await response.json();
      setTitle(data.title); 
      setUserid(data.userid); 
    } catch (error) {
      console.error("Error fetching album:", error.message);
    }
  };

  fetchAlbumData();
}, [id]);

const handleUpdate= () =>{

 const updatedAlbum = {
    id:id,
    title:title,
    userid:userid
 }

 updateAlbum(updatedAlbum);
 navigate("/");
 setTitle(" ");
 setUserid(" ");
} 

  return (
    <div className="add-album">
      <div className="info">
        <span>Enter New Title</span> 
        <br />
        <input 
          type="text"
          placeholder="Enter New Title"
          className="input-flt" value={title}
          onChange={(e) => setTitle(e.target.value)}

        />
      </div>
      <div className="info">
        <span>Enter New UserId</span>
        <br /> 
        <input
          type="text"
          placeholder="Enter New UserId"
          className="input-flt" value={userid}
          onChange={(e) => setUserid(e.target.value)}
        /> 

        <button className="save-btn" onClick={()=>handleUpdate()}>Update</button>
      </div> 
    </div>
  );   
};  

export default Updatealbum;
