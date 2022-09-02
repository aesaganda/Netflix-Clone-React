import React from "react";
import { MovieContext, useContext } from "../context/MovieContext";
import undefinedIMG from "/static/img/body/question-mark.png";


function Card({ movie }) {
  const { setModalOpen, setMovieDetail } = useContext(MovieContext);
  let movieImg;

  if (movie.poster_path) {
    movieImg = `${process.env.CARD_IMG_BASE_URL}${movie.poster_path}`;
  } else {
    movieImg = undefinedIMG;
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