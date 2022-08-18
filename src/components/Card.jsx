import React from 'react'

function Card({movie, movieDetail, item}) {
    const movieImg = `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`;
  return (
    <>
        <a className="card" href="#">
        {/* {
          movieDetail.classNameSpan && 
          (
            <span className={movieDetail.classNameSpan}>{item}</span>
          )
        } */}
          <img width="90%" className={`${movieDetail.classNameImg}`} src={movieImg} alt={movie.title} title={movie.title} />
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