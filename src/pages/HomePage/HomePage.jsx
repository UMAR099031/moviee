import React from "react";
import { useEffect,useState } from "react";
import "./HomePage.css";
import HomeCard from "../../components/HomeCard/HomeCard";
const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=2fa8f297328a4293f06805fe0c1b915d&language=ru";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setMovies(data.results));
  },[]);

if (movies.length === 0) {
  return <h1>Loading...</h1>
}

  return (
    <div className="container">
      <h2 className="title">Now Showing</h2>
      <div className="home-cards">
          {movies.map(film => <HomeCard movie={film} key={film.id} />)}
      </div>
    </div>
  );
};

export default HomePage;
