import React from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import HomePage from "../Pages/HomePage";
import {MovieContext} from "../context/MovieContext";

const movieBaseURL = "https://api.themoviedb.org/3/movie/";
const popularURL = `${movieBaseURL}popular?api_key=36a5061485b27e94b39f5b1cdc2a97a2&language=en-US&page=1`;
const topRatedURL = `${movieBaseURL}top_rated?api_key=36a5061485b27e94b39f5b1cdc2a97a2&language=en-US&page=1`;
const upComingURL = `${movieBaseURL}upcoming?api_key=36a5061485b27e94b39f5b1cdc2a97a2&language=en-US&page=1`;
const nowPlayingURL = `${movieBaseURL}now_playing?api_key=36a5061485b27e94b39f5b1cdc2a97a2&language=en-US&page=1`;

function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const [movieDetail,setMovieDetail] = useState({});
  const [moviesInfo,setMoviesInfo] = useState([]);
    
  useEffect (() => {
      (async () => {
          const { data : popular } = await axios(popularURL);
          const { data : topRated } = await axios(topRatedURL);
          const { data : upComing } = await axios(upComingURL);
          const { data : nowPlaying } = await axios(nowPlayingURL);
          setMoviesInfo([popular.results, topRated.results, upComing.results, nowPlaying.results]);
      })();
  },[]);

      const data = {
        setModalOpen,
        setMovieDetail,
        moviesInfo
      }

  return (
    <>
      {modalOpen && <Modal setOpenModal={setModalOpen} movieDetail={movieDetail}/>}
      <Header />
      <MovieContext.Provider value={data}>
        <HomePage />
      </MovieContext.Provider>
      <Footer />
    </>
  )
}

export default App
