import React from "react";

function Modal({ setOpenModal, movieDetail }) {
  const movieImg = `https://www.themoviedb.org/t/p/w220_and_h330_face/${movieDetail.poster_path}`;

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>

        <div className="modalContent">
          <div className="contentImg">
            <img src={movieImg}></img>
          </div>
          <div className="contentInfo">
            <div className="title">
              <span>{movieDetail.title}</span>
            </div>
            <div className="description">
              <span>{movieDetail.overview}</span>
            </div>
            <div className="subDescription" >
              <div>
                <span><i>Language : </i>{(movieDetail.original_language).toUpperCase()}</span>
                <br />
                <span><i> Release Date : </i> {movieDetail.release_date}</span>
                <br />
                <img className="likeButton" src="../img/body/likebutton.png" />
              </div>
              <div className="avarage"><h4>{movieDetail.vote_average}</h4></div>
            </div>
          </div>
        </div>

        <div className="footer">
          {/* <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Kapat
          </button> */}
          <button className="button button-play" onclick="location.href='#';" style={{ cursor: "pointer" }}>
            <img src="../img/body/play@2x.svg" alt="play" />
            <span>Oynat</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
