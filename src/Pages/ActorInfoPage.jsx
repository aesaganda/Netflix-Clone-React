import React from 'react'
import { ActorContext, useContext } from '../context/ActorContext';
import ActorMovieInfoSlider from '../components/ActorMovieInfoSlider';
import { useEffect, useState } from "react";
import axios from 'axios';
import { urlActorMaker } from '../helpers/UrlHelper';
import Header from '../components/Header';
import Footer from '../components/Footer';

const baseURL = "https://api.themoviedb.org/3/person/"
const key     = "36a5061485b27e94b39f5b1cdc2a97a2"

function ActorInfoPage() {
  const { actorId, actorKnownWorks } = useContext(ActorContext);
  const [ actorInfo, setActorInfo ] = useState({});

  const actorInfoURL = `${baseURL}${actorId}?api_key=${key}&language=us-US`;
  async function getActor() {
    await axios.get(actorInfoURL)
      .then(response => { setActorInfo(response.data); })
      .catch(error => { console.error(error); return Promise.reject(error); });
  }

  useEffect(() => {
    getActor();
  }, []);

  const personal_information_array = [
    { title: "Known Job", data: actorInfo.known_for_department },
    { title: "Gender", data: (actorInfo.gender === 1) ? "Female" : "Male" },
    { title: "Birthday", data: actorInfo.birthday },
    { title: "Place of birth", data: actorInfo.place_of_birth },
    { title: "Deathday", data: (actorInfo.deathday != null) ? actorInfo.deathday : "Lives"}
  ];

  let profileURL = urlActorMaker(actorInfo.profile_path);

  return (
    <>
    <Header />
      <div className='actor-main'>
        <div className='actor-wrapper'>
          <div className='actor-column'>
            {/* flex-left */}
            <div className="actor-img-section">
              <div className="actor-img">
                <img src={profileURL} alt={actorInfo.name} />
              </div>
              <div className="social-media-logo center">
                <img src='../img/body/instagram.png' />
                <img src='../img/body/twitter.png' />
              </div>
              <div className="personal-information">
                <div className="personal-information-element">
                  <h3>Personal Information</h3>
                </div>
                {
                  personal_information_array.map((data, item) => {
                    return (
                      <div key={item} className="personal-information-element">
                        <span className='title-h3'>{data.title}</span>
                        <span className='information-element-span'>{data.data}</span>
                      </div>
                    );
                  })
                }
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
                <span>Known Works</span>
                <br />
                <br />
                {
                  actorKnownWorks &&
                  <ActorMovieInfoSlider data={actorKnownWorks} />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ActorInfoPage