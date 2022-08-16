import React from 'react'

function Card({movie}) {
    const className = `card card${movie.movieId}`;
  return (
    <>
        <a className={className} href="#"><img className="card-img-size" src={movie.movieImgSrc} alt="" /></a>
    </>
  )
}

export default Card