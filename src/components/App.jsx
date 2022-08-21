import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Modal from "./Modal";
import axios from "axios";
import { useEffect, useState } from "react";
import HomePage from "../Pages/HomePage";
import {MovieContext} from "../context/MovieContext";
import { Routes, Route } from 'react-router-dom';
import LoginPage from "../Pages/LoginPage";
import PopularActors from '../Pages/PopularActors';
import MoviePage from '../Pages/MoviePage';
import MyList from '../Pages/MyList';

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
      <MovieContext.Provider value={data}>
        <Header />
      <Routes>
              <Route path="/" element={< HomePage />} />
              <Route path="/movies-series" element={< MoviePage />} />
              <Route path="/popular-actors" element={< PopularActors />} />
              <Route path="/my-list" element={< MyList />} />
              <Route path="/login" element={< LoginPage />} />
      </Routes>
      <Footer />
      </MovieContext.Provider>
    </>
  )
}

export default App
