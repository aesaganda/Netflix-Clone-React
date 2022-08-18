import axios from "axios";
import React from "react";
import Body from "../components/Body";
import { useEffect, useState } from "react";

const movieBaseURL = "https://api.themoviedb.org/3/movie/";
const mostViewedURL = `${movieBaseURL}popular?api_key=274c12e6e2e4f9ca265a01d107280eba&language=en-US&page=3`;
const standartURL = `${movieBaseURL}popular?api_key=274c12e6e2e4f9ca265a01d107280eba&language=en-US&page=3`;
const originalURl = `${movieBaseURL}popular?api_key=274c12e6e2e4f9ca265a01d107280eba&language=en-US&page=3`;

function getMovies(url) {
    return axios.get(url);
}
function MovieApi() {
    const [moviesInfo, setMoviesInfo] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const mostViewedMovies = await (await getMovies(mostViewedURL)).data.results;
                const originalMovies = await (await getMovies(originalURl)).data.results;
                const standartMovies = await (await getMovies(standartURL)).data.results;
                setMoviesInfo([standartMovies, originalMovies, mostViewedMovies]);
            } catch (e) {
                console.log("ERROR : ", e);
            }
        })();
    }, []);
    
    console.log(moviesInfo);

        return (
        <>
            <Body />
        </>
    );
}

export default MovieApi;
