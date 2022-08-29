import React, { useEffect, useState } from 'react'
import axios from "axios";
import SearchBar from './SearchBar'
import ListMovieCard from '../components/ListMovieCard';

function SearchBody() {
    const [query, setQuery] = useState("");
    const [queryMovie, setQueryMovie] = useState([]);

    useEffect(() => {
        if (query === process.env.BASE_QUERY_URL) {
            setQueryMovie([]);
        } else {
            (async () => {
                const { data } = await axios(query);
                setQueryMovie(data.results);
            })();
        }
    },[query]);
    
    function searchMovie(event) {
        let queryURl=`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${event.target.value}&include_adult=false`;
        setQuery(queryURl);
    }
    
    return (
        <div className='main-actors-list'>
            <div className='title'>
                <h2> Film, Dizi, Belgesel Ara </h2>
            </div>
            <div className='sub-actor-list'>
                <SearchBar searchMovie={searchMovie} />
                {
                    queryMovie &&
                    queryMovie.map((movie, item) => {
                        return (
                            <ListMovieCard movie={movie} item={item} isButtonActive={false} cardClassName={"searchMovie"}/>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default SearchBody