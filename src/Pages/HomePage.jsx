import axios from "axios";
import React from "react";
import Body from "../components/Body";
import { useEffect, useState } from "react";

const movieBaseURL = "https://api.themoviedb.org/3/movie/";

const popularURL = `${movieBaseURL}popular?api_key=36a5061485b27e94b39f5b1cdc2a97a2&language=en-US&page=1`;
const topRatedURL = `${movieBaseURL}top_rated?api_key=36a5061485b27e94b39f5b1cdc2a97a2&language=en-US&page=2`;
const upComingURL = `${movieBaseURL}upcoming?api_key=36a5061485b27e94b39f5b1cdc2a97a2&language=en-US&page=2`;
const nowPlayingURL = `${movieBaseURL}now_playing?api_key=36a5061485b27e94b39f5b1cdc2a97a2&language=en-US&page=1`;


function HomePage() {
    const [moviesInfo,setMoviesInfo] = useState([]);

    useEffect (() => {
        (async () => {
            const { data : popular } = await axios(popularURL);
            const { data : topRated } = await axios(topRatedURL);
            const { data : upComing } = await axios(upComingURL);
            const { data : nowPlaying } = await axios(nowPlayingURL);
            setMoviesInfo([popular.results, topRated.results, upComing.results, nowPlaying.results]);
        })();
    },[]);

    return (
        <>
            <Body moviesInfo = {moviesInfo}/>
        </>
    );
}

export default HomePage;
