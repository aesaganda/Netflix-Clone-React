import React from 'react'
import axios from "axios";
import { MovieContext, useContext } from '../context/MovieContext'
import { successAlert, errorAlert } from "../helpers/AlertHelper";
import { urlMovieMaker } from '../helpers/UrlHelper';

const removeApiURL = `https://api.themoviedb.org/3/list/8214743/remove_item?session_id=03736be069f18c992cec140c9e99f579734c39fb&api_key=36a5061485b27e94b39f5b1cdc2a97a2&media_id=`

function ListMovieCard({ movie, item, isButtonActive, cardClassName }) {
    const { deleteMovie, setModalOpen, setMovieDetail } = useContext(MovieContext);

    async function removeMovie() {
        try {
            await axios.post(`${removeApiURL}${movie.id}`)
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