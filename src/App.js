//import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  let movieObj = [
    {
      poster:
        "https://images-na.ssl-images-amazon.com/images/I/816NlEQFMOL.jpg",
      name: "LIFE OF PIE",
      rating: "7.5",
      summary:
        "The storyline revolves around an Indian teenager named 'Pi' Patel, telling a novelist about his life story, and how at 16 he survives a shipwreck"
    },
    {
      poster: "https://i.ytimg.com/vi/pg0yOoQBlww/sddefault.jpg",
      name: "BAHUBALI 2 - The Conclusion",
      rating: "8.5",
      summary:
        "Baahubali 2: The Conclusion is a 2017 Indian epic action film directed by S. S. Rajamouli, who co-wrote the film with K. V. Vijayendra Prasad. It was produced by Shobu Yarlagadda and Prasad Devineni under the banner Arka Media Works"
    },
    {
      poster:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/04/27/817597-avengers-endgame.jpg",
      name: "Avengers - Endgame",
      rating: "8.8",
      summary:
        "After the devastating events of the Infinity War, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe."
    },
    {
      poster:
        "https://i.ytimg.com/vi/cSbLuBtr35A/hqdefault.jpg",
      name: "IRUDHI SUTTRU",
      rating: "7",
      summary:
        "Prabhu Selvaraj, a boxer, is ignored by the boxing association. He tries to accomplish his dream by training Madhi, an amateur fighter."
    }
  ];
 return (

    <div className="App">
 <div className="header">
        <img
          className="movie-head-pic"
          alt="movie-time"
          src="https://media.istockphoto.com/vectors/movie-time-poster-vintage-cinema-film-projector-home-movie-theater-vector-id1168570266?k=20&m=1168570266&s=612x612&w=0&h=bMfhtb2a-m1iALFYtXn9f_3jUwy33ydjF2cNiIb_DqQ="
        />
        <h1 className="heaad">MOVIES BLOG</h1>
      </div>
      <hr />
      {movieObj.map(({ poster, name, rating, summary }) => (
        <Movies poster={poster} name={name} rating={rating} summary={summary} />
      ))}

    </div>
  );
  
}

export default App;
function Movies({ poster, name, rating, summary }) {
  return (
    <div className="movie">
      <div>
        <img className="poster" alt="Poster" src={poster} />
      </div>
      <div className="movie-detail">
        <h2>{name}</h2>
        <h4>
          {" "}
          <span>Rating : </span>
          {rating}
        </h4>
        <p className="summary">{summary}</p>
        <Counter />
      </div>
    </div>
  );
}
function Counter(){
  const[like,setLike] = useState(0);//usestate retruns an array
  const[dislike,setDislike] = useState(0);//usestate retruns an array

  return(<div className="Counter-Cont">
    <button onClick={()=>setLike(like+1)}>👍 {like}</button>
    <button onClick={()=>setDislike(dislike+1)}>👎 {dislike}</button>
  </div>);

}