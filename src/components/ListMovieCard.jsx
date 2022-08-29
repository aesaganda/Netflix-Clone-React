import React from 'react'
import axios from "axios";
import { MovieContext, useContext } from '../context/MovieContext'
import { successAlert, errorAlert } from "../helpers/AlertHelper";
import { urlMovieMaker } from '../helpers/UrlHelper';

function ListMovieCard({ movie, item, isButtonActive, cardClassName }) {
    const { deleteMovie, setModalOpen, setMovieDetail } = useContext(MovieContext);

    async function removeMovie() {
        try {
            await axios.post(`${process.env.REMOVE_API_URL}${movie.id}`)
            successAlert('Listeden başarıyla kaldırıldı.');
            deleteMovie(movie);
        } catch (error) {
            errorAlert('Listeden silinemedi!');
        }
    }

    let { posterURL, className } = urlMovieMaker(movie.poster_path, cardClassName);
    return (
        <>
            <div key={item} className="list-movie-card">
                <img onClick={() => {
                    setModalOpen(true);
                    setMovieDetail(movie);
                }} className='movie-poster' src={posterURL} alt={movie.title} />
                {
                    (movie.title) ? <h3 className={`${className}`}>{movie.title}</h3> : <h3>Film Adı Mevcut Değil</h3>
                }
                {
                    isButtonActive &&
                    <button onClick={removeMovie} className="deleteMovie" > Listeden Kaldır </button>
                }
            </div>
        </>
    )
}

export default ListMovieCard