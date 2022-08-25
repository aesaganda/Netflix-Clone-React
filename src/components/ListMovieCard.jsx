import React from 'react'
import axios from "axios";
import { MovieContext, useContext } from '../context/MovieContext'
import { toast } from 'react-toastify';

const removeApiURL = `https://api.themoviedb.org/3/list/8214743/remove_item?session_id=03736be069f18c992cec140c9e99f579734c39fb&api_key=36a5061485b27e94b39f5b1cdc2a97a2&media_id=`
const basePosterURL = "https://www.themoviedb.org/t/p/w370_and_h556_multi_faces/"

const successAlert = (message) => toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});;

const errorAlert = (message) => toast.error(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});

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

    let posterURL;

    if (movie.poster_path) {
        posterURL = `${basePosterURL}${movie.poster_path}`;
    } else {
        posterURL = "../img/body/question-mark.png";
        cardClassName = `${cardClassName} undefinedImg`;
    }

    return (
        <>
            <div key={item} className="list-movie-card">
                <img onClick={() => {
                    setModalOpen(true);
                    setMovieDetail(movie);
                }} className='movie-poster' src={posterURL} alt={movie.title} />
                {
                    (movie.title) ? <h3 className={`${cardClassName}`}>{movie.title}</h3> : <h3>Film Adı Mevcut Değil</h3>
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