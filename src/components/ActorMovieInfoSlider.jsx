import React from 'react'
import Carousel from 'better-react-carousel'

const baseMovieURL = "https://www.themoviedb.org/t/p/w150_and_h225_bestv2";

const ActorMovieInfoSlider = ({ data }) => {
  return (
    <Carousel cols={3} rows={1} gap={10} loop>
      {
        data &&
        data.map((movieInfo, item) => {
          return (
            <Carousel.Item key={item}>
              {
                movieInfo.poster_path &&
                <img width="100%" src={`${baseMovieURL}${movieInfo.poster_path}`} />
              }
            </Carousel.Item>
          );
        })
      }
    </Carousel>
  )
}

export default ActorMovieInfoSlider;