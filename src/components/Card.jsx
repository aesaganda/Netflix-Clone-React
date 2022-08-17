import React from 'react'

function Card({movie, movieDetail}) {
    // const classNameA = `card card${movie.movieId}`;
    const classNameA = `card`;
    const movieImg = `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`;
  return (
    <>
        <a className={classNameA} href="#">
        {
          movieDetail.classNameSpan && (
            <span className={movieDetail.classNameSpan}>{movie.movieId}</span>
          )
        }
          <img width="100%" className={movieDetail.classNameImg} src={movie.movieImgSrc} alt="" />
        {/* {
          isActive_bar && (
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          ) 
        } */}
        </a>
        
    </>
  )
}

export default Card