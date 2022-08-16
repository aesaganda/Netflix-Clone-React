import React, { createContext } from "react";
import { useContext } from "react";

const MovieInfoContext = createContext();

const moviesStandart = [
  {
    movieId: 1,
    movieName: "lupin",
    movieImgSrc: "../img/body/lupin.png",
  },
  {
    movieId: 2,
    movieName: "yanimda_kal",
    movieImgSrc: "../img/body/yanimda2.png",
  },
  {
    movieId: 3,
    movieName: "leyla_mecnun",
    movieImgSrc: "../img/body/leyla-mecnun.png",
  },
  {
    movieId: 4,
    movieName: "50m2",
    movieImgSrc: "../img/body/50m2p.png",
  },
  {
    movieId: 5,
    movieName: "snow",
    movieImgSrc: "../img/body/snow.png",
  },
  {
    movieId: 6,
    movieName: "yanimda_kal",
    movieImgSrc: "../img/body/yanimda2.png",
  },
  {
    movieId: 7,
    movieName: "50m2",
    movieImgSrc: "../img/body/50m2p.png",
  },
  {
    movieId: 8,
    movieName: "yanimda_kal",
    movieImgSrc: "../img/body/yanimda2.png",
  },
  {
    movieId: 9,
    movieName: "snow",
    movieImgSrc: "../img/body/snow.png",
  },
  {
    movieId: 10,
    movieName: "lupin",
    movieImgSrc: "../img/body/lupin.png",
  },
];
const moviesOriginal = [
  {
    movieId: 1,
    movieName: "tribes",
    movieImgSrc: "../img/body/tribes.png",
  },
  {
    movieId: 2,
    movieName: "Anne",
    movieImgSrc: "../img/body/Anne-with.png",
  },
  {
    movieId: 3,
    movieName: "ginny",
    movieImgSrc: "../img/body/ginny-17@1x.png",
  },
  {
    movieId: 4,
    movieName: "50m2",
    movieImgSrc: "../img/body/50m2.png",
  },
  {
    movieId: 5,
    movieName: "tribes",
    movieImgSrc: "../img/body/tribes.png",
  },
  {
    movieId: 6,
    movieName: "Anne_with",
    movieImgSrc: "../img/body/Anne-with.png",
  },
];

const moviesMostViewed = [
  {
    movieId: 1,
    movieName: "nobetci",
    movieImgSrc: "../img/body/nobetci.png",
  },
  {
    movieId: 2,
    movieName: "gozlerin",
    movieImgSrc: "../img/body/gozlerin.png",
  },
  {
    movieId: 3,
    movieName: "ginny",
    movieImgSrc: "../img/body/ginny.png",
  },
  {
    movieId: 4,
    movieName: "gozlerin",
    movieImgSrc: "../img/body/gozlerin.png",
  },
  {
    movieId: 5,
    movieName: "amsterdam",
    movieImgSrc: "../img/body/amsterdam.png",
  },
  {
    movieId: 6,
    movieName: "Anne_with",
    movieImgSrc: "../img/body/ginny.png",
  },
];

const movies = {
  moviesStandart,
  moviesOriginal,
  moviesMostViewed,
};

export const MovieInfoProvider = ({ children }) => {
  return (
    <MovieInfoContext.Provider value={movies}>
      {children}
    </MovieInfoContext.Provider>
  );
};

export const useMovieInfo = () => useContext(MovieInfoContext);
