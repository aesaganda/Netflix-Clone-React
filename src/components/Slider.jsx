import React from "react";
import Card from "./Card";
import { useMovieInfo } from "../context/MovieInfoContext";
import Carousel from "better-react-carousel";

function Slider({ isActive_bar, movieDetail }) {
  const { moviesStandart, moviesOriginal, moviesMostViewed, moviesInfo } = useMovieInfo();
let movies;
  switch (movieDetail.movieURL) { 
    case "1":
        movies = moviesStandart;
      break;
    case "2":
        movies = moviesMostViewed; //moviesInfo[2]
      break;
    case "3":
        movies = moviesOriginal;
      break;

    default:
      console.log("Url degeri eslesmedi.");
      break;
  }


  return (
    <>
      <div className="slider">
        <Carousel cols={5} rows={1} gap={10}>
          {movies.map((movie) => {
            return (
              <Carousel.Item key={movie.movieId}>
                <Card
                  movie={movie}
                  isActive_bar={isActive_bar}
                  movieDetail={movieDetail}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}

export default Slider;