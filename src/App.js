import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddAlbum from "./AddAlbum";
import "./App.css";
import Card from "./Card";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import Updatealbum from "./Updatealbum";

function App() {
  const [albums, setAlbums] = useState([]);
  console.log("albumsApp", albums);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data = await response.json();
        console.log("data", data);

        // Assuming the API response is an array, otherwise adjust as needed
        if (Array.isArray(data)) {
          setAlbums(data.slice(0, 20));
          // setAlbums(data);
        } else {
          console.error("Invalid data format received from the API");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const addAlbum = async (newAlbum) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos",
        {
          method: "POST",
          body: JSON.stringify(newAlbum),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to add album");
      }
      const data = await response.json();
      setAlbums([...albums, data]);
      alert("Card added successfully");
    } catch (error) {
      console.error("Error adding album:", error.message);
    }
  };

  const deleteAlbum = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete album");
      }
      setAlbums(albums.filter((album) => album.id !== id));
      alert("Card deleted successfully");
    } catch (error) {
      console.error("Error deleting album:", error.message);
    }
  };

  const updateAlbum = async (updatedAlbum) => {
console.log("updatedAlbum", updatedAlbum);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${updatedAlbum.id}`,
        {
          method: "PUT",
          body: JSON.stringify(updatedAlbum),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update album");
      }
      setAlbums(
        albums.map((album) =>
          album.id === updatedAlbum.id ? updatedAlbum : album
        )
      );
      alert("Album updated successfully");
    } catch (error) {
      console.error("Error updating album:", error.message);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Card albums={albums} deleteAlbum={deleteAlbum} />}
          />
          <Route path="/addalbum" element={<AddAlbum addAlbum={addAlbum} />} />
          <Route
            path="/updatealbum/:id"
            element={<Updatealbum updateAlbum={updateAlbum} />}
          /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
