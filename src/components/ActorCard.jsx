import React from 'react'

const baseProfileURL = "https://www.themoviedb.org/t/p/w470_and_h470_face";

function ActorCard({ actor, item }) {
  return (
    <>
      <div href="" key={item} className="actor-card">
        <img src={`${baseProfileURL}${actor.profile_path}`} alt={actor.name} />
        <h3>{actor.name}</h3>
      </div>
    </>
  )
}

export default ActorCard