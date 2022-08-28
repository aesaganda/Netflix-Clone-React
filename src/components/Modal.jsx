import React from "react";
import axios from "axios";
import { MovieContext, useContext } from "../context/MovieContext";
import { successAlert, warningAlert } from "../helpers/AlertHelper";
import { urlMakerModal, urlWeb } from "../helpers/UrlHelper";

const addMovieApiURL = `https://api.themoviedb.org/3/list/8214743/add_item?api_key=36a5061485b27e94b39f5b1cdc2a97a2&session_id=03736be069f18c992cec140c9e99f579734c39fb&media_id=`;

function Modal({ setOpenModal, movieDetail }) {
  const { addListMovie } = useContext(MovieContext);
  const posterURL =  urlMakerModal(movieDetail.poster_path, "");
  // urlWeb(movieDetail.title)
  async function addMovie() {
    try {
      await axios.post(`${addMovieApiURL}${movieDetail.id}`);
      successAlert("Filminiz Listeye eklendi.");
      addListMovie(movieDetail);
    } catch (error) {
      error == "AxiosError: Request failed with status code 403"
        ? warningAlert("Lütfen tekrar eklemeye çalışmayınız.")
        : warningAlert(error);
    } finally {
      setOpenModal(false);
    }
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}>X</button>
        </div>

        <div className="modalContent">
          <div className="contentImg">
            <img src={posterURL}></img>
          </div>
          <div className="contentInfo">
            <div className="title">
              <span>{movieDetail.title}</span>
            </div>
            <div className="description">
              <span>{movieDetail.overview}</span>
            </div>
            <div className="subDescription">
              <div>
                <span>
                  <i>Language : </i>
                  {movieDetail.original_language.toUpperCase()}
                </span>
                <br />
                <span>
                  <i> Release Date : </i> {movieDetail.release_date}
                </span>
                <br />
                <img
                  onClick={addMovie}
                  className="likeButton"
                  src="../img/body/likebutton.png"
                />
              </div>
              <div className="avarage">
                <h4>{movieDetail.vote_average}</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <button
            className="button button-play"onClick={(e) => {
              e.preventDefault();
              window.location.href=`http://netflix.com/`;
              }}>
            <img src="../img/body/play@2x.svg" alt="play" />
            <span>Oynat</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
