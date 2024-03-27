import { Link } from "react-router-dom";

const Card = ({albums, deleteAlbum}) => {
  console.log("albums", albums);

  return (  
    <div className="card-container">
      {albums.map((album, index) => (
        <div className="card-box" key={index}>
          <h3>{album.id}</h3>
          <span>{album.title}</span>
          <br />
          <br />
          <button className="btn-new"><Link to={`/updatealbum/${album.id}`}>Update</Link></button>
          <button className="btn-new" onClick={()=>deleteAlbum(album.id)}>Delete</button>
        </div>
      ))}
    </div> 
  );
};

export default Card;
