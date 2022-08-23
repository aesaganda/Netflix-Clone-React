import React from 'react'
import { ActorContext, useContext } from '../context/ActorContext';
import { useEffect, useState } from "react";
import axios from 'axios';
import ActorMovieInfoSlider from '../components/ActorMovieInfoSlider';

const baseURL = "https://api.themoviedb.org/3/person/"
const key = "36a5061485b27e94b39f5b1cdc2a97a2"
const base_img_path = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/"

function ActorInfoPage() {
  const { actorId } = useContext(ActorContext);
  //const actorId = localStorage.getItem("actorId");
  const [actorInfo, setActorInfo] = useState({});
  const actorInfoURL = `${baseURL}${actorId}?api_key=${key}&language=us-US`;

  useEffect(() => {
    (async () => {

      const { data } = await axios(actorInfoURL);
      setActorInfo(data);
    })();
  }, []);

  const profile_path = `${actorInfo.profile_path}`
  const profile_img = `${base_img_path}${profile_path}`;
  console.log(actorInfo);

  let gender = (actorInfo.gender === 1) ? "Female" : "Male"; 

  return (
    <>
      <div className='actor-main'>
        <div className='actor-wrapper'>
          <div className='actor-column'>
            {/* flex-left */}
            <div className="actor-img-section">
              <div className="actor-img">
                {
                  profile_path &&
                  <img src={profile_img} alt={actorInfo.name} />
                }
              </div>
              <div className="social-media-logo center">
                <img src='../img/body/instagram.png' />
                <img src='../img/body/twitter.png' />
              </div>
              <div className="personal-information">
                <div className="personal-information-element">
                  <h3>Personal Information</h3>
                </div>
                <div className="personal-information-element">
                  <span className='title-h3'>Known Job</span>
                  <span className='information-element-span'>
                    {actorInfo.known_for_department}
                  </span>
                </div>
                <div className="personal-information-element">
                <span className='title-h3'>Gender</span>
                  {
                    gender &&
                    <span className='information-element-span'>{gender}</span>
                  }
                </div>
                <div className="personal-information-element">
                <span className='title-h3'>Birthday</span>
                  <span className='information-element-span'>{actorInfo.birthday}</span>
                </div>
                {
                  actorInfo.deathday &&
                  <div className="personal-information-element">
                  <span className='title-h3'>Deathday</span>
                    <span className='information-element-span'>{actorInfo.deathday}</span>
                  </div>
                }
                <div className="personal-information-element">
                  <span className='title-h3'>Place of birth</span>
                  <span className='information-element-span'>
                  {actorInfo.place_of_birth}
                  </span>
                </div>
              </div>
            </div>
            {/* flex-right */}
            <div className="actor-info-section">
              <div className="actor-name">
                <span>{actorInfo.name}</span>
              </div>
              <div className="actor-biography center">
                <span>{actorInfo.biography}</span>
              </div>
              <div className="actor-known-job">
                <ActorMovieInfoSlider />
              </div>
            </div>
          </div>
        </div>
      </div>


    </>

  )
}

export default ActorInfoPage