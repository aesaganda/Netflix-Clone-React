import React from 'react';

import Modal from "./Modal";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import { ActorContext } from '../context/ActorContext';
import { ToastContainer } from 'react-toastify';
import MainRoute from '../routes/MainRoute';

const popularURL = `${process.env.MOVIE_BASE_URL}movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=2`;
const topRatedURL = `${process.env.MOVIE_BASE_URL}movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=2`;
const upComingURL = `${process.env.MOVIE_BASE_URL}movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=2`;
const nowPlayingURL = `${process.env.MOVIE_BASE_URL}movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=2`;
const listsMovieURL = `${process.env.MOVIE_BASE_URL}list/8214743?api_key=${process.env.API_KEY}&language=en-US`;
const actorURL = `${process.env.MOVIE_BASE_URL}person/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`;

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [movieDetail, setMovieDetail] = useState({});
  const [moviesInfo, setMoviesInfo] = useState([]);
  const [actorId, setActorId] = useState(0);
  const [actorsInfo, setActorsInfo] = useState([]);
  const [actorKnownWorks, setActorKnownWorks] = useState([]);
  const [listsMovie, setListsMovie] = useState([]);

  function getList() {
    return axios.get(listsMovieURL)
      .then(response => { setListsMovie(response.data.items); })
      .catch(error => { console.error(error); return Promise.reject(error); });
  }

   function getActor() {
    return axios.get(actorURL)
      .then(response => { setActorsInfo(response.data.results); })
      .catch(error => { console.error(error); return Promise.reject(error); });
  }

  async function getMovie() {
    const { data: popular } = await axios(popularURL);
    const { data: topRated } = await axios(topRatedURL);
    const { data: upComing } = await axios(upComingURL);
    const { data: nowPlaying } = await axios(nowPlayingURL);
    setMoviesInfo([popular.results, topRated.results, upComing.results, nowPlaying.results]);
  }

  useEffect(() => {
    getList();
    getMovie();
    getActor();
  }, []);

  const data = {
    setModalOpen,
    setMovieDetail,
    setListsMovie,

    moviesInfo,
    actorsInfo,
    listsMovie,

    deleteMovie,
    addListMovie,
  }

  const actorID = {
    actorId,
    setActorId,
    actorKnownWorks,
    setActorKnownWorks,
  }

  function addListMovie(movie) {
    const newMovieList = listsMovie.push(movie);
    setListsMovie[newMovieList];
  }

  function deleteMovie(movie) {
    const newMovieList = listsMovie.filter(
      m => m.id !== movie.id
    );
    setListsMovie(newMovieList);
  }

  return (
    <>
      <MovieContext.Provider value={data}>
        <ToastContainer />
        {modalOpen && <Modal setOpenModal={setModalOpen} movieDetail={movieDetail} />}
        <ActorContext.Provider value={actorID}>
          <MainRoute />
        </ActorContext.Provider>
      </MovieContext.Provider>
    </>
  )
}

export default App
