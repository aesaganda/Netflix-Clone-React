import React from "react";
import { MovieContext, useContext } from "../context/MovieContext";

function Card({ movie }) {
  const { setModalOpen, setMovieDetail } = useContext(MovieContext);
  let movieImg;

  if (movie.poster_path) {
    movieImg = `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`;
  } else {
    movieImg = "../img/body/question-mark.png";
  }

  return (
    <div className="card" onClick={() => {
      setModalOpen(true);
      setMovieDetail(movie);
    }}>
      <img width="90%" className={"img-original-movie-size"} src={movieImg} alt={movie.title} title={movie.title} />
    </div>
  )
}

export default Card