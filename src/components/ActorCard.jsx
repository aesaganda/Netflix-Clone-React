import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ActorContext } from '../context/ActorContext';

const baseProfileURL = "https://www.themoviedb.org/t/p/w470_and_h470_face";

function ActorCard({ actor, item }) {
  const {setActorId,setActorKnownWorks} = useContext(ActorContext);
  
  return (
    <>  
      <div key={item} className="actor-card" onClick={() => {
        setActorId(actor.id)
        setActorKnownWorks(actor.known_for);
    }}>
        <Link to={`/popular-actors/actor-name`}>
          {
            actor.profile_path &&
            <img className='profile-photo' src={`${baseProfileURL}${actor.profile_path}`} alt={actor.name} />
          }
          <h3>{actor.name}</h3>
        </Link>
        
      </div>
    </>
  )
}

export default ActorCard