import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Modal from "./Modal";
import axios from "axios";
import { useEffect, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import { ActorContext } from '../context/ActorContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainRoute from '../routes/MainRoute';
import DropDown from './DropDown';

// import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// console.log(process.env.REACT_APP_API_KEY);

const movieBaseURL = "https://api.themoviedb.org/3/";
const popularURL = `${movieBaseURL}movie/popular?api_key=36a5061485b27e94b39f5b1cdc2a97a2&language=en-US&page=1`;
const topRatedURL = `${movieBaseURL}movie/top_rated?api_key=36a5061485b27e94b39f5b1cdc2a97a2&language=en-US&page=1`;
const upComingURL = `${movieBaseURL}movie/upcoming?api_key=36a5061485b27e94b39f5b1cdc2a97a2&language=en-US&page=1`;
const nowPlayingURL = `${movieBaseURL}movie/now_playing?api_key=36a5061485b27e94b39f5b1cdc2a97a2&language=en-US&page=1`;
const actorURL = "https://api.themoviedb.org/3/person/popular?api_key=36a5061485b27e94b39f5b1cdc2a97a2&language=en-US&page=1";
const listsMovieURL = `${movieBaseURL}list/8214743?api_key=36a5061485b27e94b39f5b1cdc2a97a2&language=en-US`;


function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const [movieDetail, setMovieDetail] = useState({});
  const [moviesInfo, setMoviesInfo] = useState([]);
  const [actorId, setActorId] = useState(0);
  const [actorsInfo, setActorsInfo] = useState([]);
  const [actorKnownWorks, setActorKnownWorks] = useState([]);
  const [listsMovie, setListsMovie] = useState([]);

  async function getList() {
    await axios.get(listsMovieURL)
      .then(response => { setListsMovie(response.data.items); })
      .catch(error => { console.error(error); return Promise.reject(error); });
  }

  async function getActor() {
    await axios.get(actorURL)
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
          <Header />
          <MainRoute />
        </ActorContext.Provider>
      </MovieContext.Provider>
      <Footer />
    </>
  )
}

export default App
