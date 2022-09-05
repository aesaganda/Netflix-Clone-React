import React from "react";
import Card from "../Card";
import { MovieContext,useContext } from "../../context/MovieContext";
import Carousel from "better-react-carousel";

function Slider({ data }) {
  
  const {moviesInfo} = useContext(MovieContext);
  let movies = moviesInfo[data.movieURL];

  return (
    <>
      <h2>{data.title}</h2>
      <br />
      <div className="slider">
        <Carousel cols={6} rows={data.rowInfo} gap={data.gapSize} loop>
          {
            movies && 
            movies.map((movie,item) => {

              return (
                <Carousel.Item key={item}>
                  <Card
                    movie={movie}
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