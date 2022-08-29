import React from 'react'
import Carousel from 'better-react-carousel'

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
                <img width="100%" src={`${process.env.ACTOR_MOVIE_BASE_URL}${movieInfo.poster_path}`} />
              }
            </Carousel.Item>
          );
        })
      }
    </Carousel>
  )
}

export default ActorMovieInfoSlider;