import React from 'react'
import Card from './Card'
import { useMovieInfo } from "../context/MovieInfoContext";

function Slider() {

    const movies = useMovieInfo();

  return (
   <>
    <div className="slider">
        <img className="arrow" src="../img/body/arrowleft-3@2x.svg" alt="" />
        {
            movies.map((movie) => {
                return (
                    < div key={movie.movieId}>
                        <Card movie={movie}/>
                    </div>
                )
            })
        }
        <img className="arrow" src="../img/body/arrowleft@2x.svg" alt="" />
    </div>
   </>
  )
}

export default Slider