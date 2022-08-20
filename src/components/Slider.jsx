import React from "react";
import Card from "./Card";
import {MovieContext,useContext} from "../context/MovieContext";
import Carousel from "better-react-carousel";

function Slider({ isActive_bar, movieDetail }) {
  
  const {moviesInfo} = useContext(MovieContext);
  let movies = moviesInfo[movieDetail.movieURL];

  return (
    <>
      <div className="slider">
        <Carousel cols={6} rows={1} gap={1} loop>
          {
            movies && 
            movies.map((movie,item) => {

              return (
                <Carousel.Item key={item}>
                  <Card
                    movie={movie}
                    isActive_bar={isActive_bar}
                    movieDetail={movieDetail}
                    item = {item}
                  />
                </Carousel.Item>
              );
            })
          }
        </Carousel>
      </div>
    </>
  );
}

export default Slider;