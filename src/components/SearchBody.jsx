import React, { useEffect, useState } from 'react'
import axios from "axios";
import SearchBar from './SearchBar'
import ListMovieCard from '../components/ListMovieCard';

const baseQueryURl = "https://api.themoviedb.org/3/search/movie?api_key=36a5061485b27e94b39f5b1cdc2a97a2&language=en-US&query=&include_adult=false";

function SearchBody() {
    
    const [query, setQuery] = useState("");
    const [queryMovie, setQueryMovie] = useState([]);
 
    useEffect(() => {
        console.log("query son durum:",query);
        if (query=== baseQueryURl) {
            setQueryMovie([]);
        } else {
            (async () => {
                const { data } = await axios(query);
                setQueryMovie(data.results);
            })();
        }
        
    },[query]);  
    
    function searchMovie(event) {
        console.log(event.target.value);
        let queryURl=`https://api.themoviedb.org/3/search/movie?api_key=36a5061485b27e94b39f5b1cdc2a97a2&language=en-US&query=${event.target.value}&include_adult=false`;
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