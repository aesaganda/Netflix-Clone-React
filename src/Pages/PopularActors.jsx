import React from 'react'
 import { useState, useEffect } from 'react'
import ActorBody from '../components/ActorBody';
import axios from "axios";


const actorsURL = "https://api.themoviedb.org/3/person/popular?api_key=36a5061485b27e94b39f5b1cdc2a97a2&language=en-US&page=1";

function PopularActors() {
  const [actors,setActors] = useState([]);
  useEffect (() => {
    (async () => {
        const { data : actors  } = await axios(actorsURL);
        setActors([actors.results]);
    })();
},[]);

  return (
    <>
      <ActorBody data={actors} />
    </>


  )
}

export default PopularActors

