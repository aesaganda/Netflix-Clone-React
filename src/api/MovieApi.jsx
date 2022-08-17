import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";

function MovieApi() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async (() => {
            var movie1 = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=274c12e6e2e4f9ca265a01d107280eba&language=en-US&page=1");
            console.log("movie:", movie1.data.results);
            const movies = movie1.data.results;
            console.log(movie[0].title);
            setMovie([movies]);
        })();
    },[]);

    return (
        <>
            <p style={{color:"white"}}>movie[0].title</p>
        </>
    )

}

export default MovieApi