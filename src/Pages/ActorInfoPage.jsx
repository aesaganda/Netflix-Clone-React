import React from 'react'
import { ActorContext, useContext } from '../context/ActorContext';
import { useEffect, useState } from "react";
import axios from 'axios';

const baseURL = "https://api.themoviedb.org/3/person/"
const key = "36a5061485b27e94b39f5b1cdc2a97a2"
const base_img_path = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/"

function ActorInfoPage() {
  const {actorId} = useContext(ActorContext);
  const [actorInfo,setActorInfo] = useState({});
  const actorInfoURL = `${baseURL}${actorId}?api_key=${key}&language=us-US`;
  // console.log(actorInfoURL); 
  useEffect (() => {
      (async () => {
          const { data } = await axios(actorInfoURL);
          setActorInfo(data);
      })();
  },[]);

  const profile_path = `${actorInfo.profile_path}`
  const profile_img = `${base_img_path}${profile_path}`;

  return (
  <>
    <div className='actor-main'>
      <div className='actor-wrapper'>
        <div className='actor-column'>
          <div className="actor-img-section">
            <div className="actor-img">
              //!actor photo
              {
                profile_path && profile_img &&
                <img src={profile_img} alt={actorInfo.name}/>
              }
            </div>
            <div className="social-media-logo">
              //! twitter instagram
            </div>
            <div className="personal-information">
              //!Known Job
              //!Known Movies
              //!Gender
              //!Birthday
              //!Place of birth
              //!Thomas Stanley Holland
            </div>
          </div>
          <div className="actor-info-section">
            <div className="actor-name">
              //!ActorName
            </div>
            <div className="actor-biography">

            </div>
            <div className="actor-known-job">

            </div>
          </div>
        </div>
      </div>  
    </div>
  
  
  </>

  )
}

export default ActorInfoPage