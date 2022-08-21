import React from "react";
import Card from "./Card";
import {MovieContext,useContext} from "../context/MovieContext";
import Carousel from "better-react-carousel";

function Slider({ movieDetail,rowsInfo, gapSize }) {
  
  const {moviesInfo} = useContext(MovieContext);
  let movies = moviesInfo[movieDetail.movieURL];

  return (
    <>
      <div className="slider">
        <Carousel cols={6} rows={rowsInfo} gap={gapSize} loop>
          {
            movies && 
            movies.map((movie,item) => {

              return (
                <Carousel.Item key={item}>
                  <Card
                    movie={movie}
                    movieDetail={movieDetail}
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