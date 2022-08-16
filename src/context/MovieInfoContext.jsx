import React, { createContext } from 'react'
import { useContext } from 'react';

const MovieInfoContext = createContext(); 

const movies = [
    {
        movieId: 1,
        movieName:"lupin",
        movieImgSrc: "../img/body/lupin.png",
    },
    {
        movieId: 2,
        movieName:"yanimda_kal",
        movieImgSrc: "../img/body/yanimda2.png",
    },
    {
        movieId: 3,
        movieName:"leyla_mecnun",
        movieImgSrc: "../img/body/leyla-mecnun.png"
    },
    {
      movieId: 4,
      movieName:"50m2",
      movieImgSrc: "../img/body/50m2p.png"
    },
    {
      movieId: 5,
      movieName:"snow",
      movieImgSrc: "../img/body/snow.png"
    },
    {
      movieId: 6,
      movieName:"yanimda_kal",
      movieImgSrc: "../img/body/yanimda2.png"
    },
    {
      movieId: 7,
      movieName:"brooklyn",
      movieImgSrc: "../img/body/brooklyn.png"
    },
]

export const MovieInfoProvider = ({children}) => {
  return (
    <MovieInfoContext.Provider value={movies}>{children}</MovieInfoContext.Provider>
  )
}

export const useMovieInfo = () => useContext(MovieInfoContext);
