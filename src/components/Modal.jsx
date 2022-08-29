import React, { useState } from "react";
import axios from "axios";
import { MovieContext, useContext } from "../context/MovieContext";
import { successAlert, warningAlert } from "../helpers/AlertHelper";
import { urlMakerModal } from "../helpers/UrlHelper";

function Modal({ setOpenModal, movieDetail }) {
  const [likeButtonColor, setLikebuttonColor] = useState("../img/body/likebutton.png");
  const { addListMovie } = useContext(MovieContext);
  const posterURL =  urlMakerModal(movieDetail.poster_path, "");

  async function addMovie() {
    try {
      await axios.post(`${process.env.ADD_MOVIE_API_URL}${movieDetail.id}`);
      successAlert("Filminiz Listeye eklendi.");
      addListMovie(movieDetail);
      setLikebuttonColor("../img/body/redLike.png")
    } catch (error) {
      error == "AxiosError: Request failed with status code 403"
        ? warningAlert("Lütfen tekrar eklemeye çalışmayınız.")
        : warningAlert(error);
    } finally {
      // setOpenModal(false);
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
                  src={likeButtonColor}
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
