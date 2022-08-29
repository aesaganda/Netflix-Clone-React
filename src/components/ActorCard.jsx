import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ActorContext } from "../context/ActorContext";
import { urlWeb } from "../helpers/UrlHelper";

function ActorCard({ actor, item }) {
  const { setActorId, setActorKnownWorks } = useContext(ActorContext);
  
  let profilePhotoURL;
  if (actor.profile_path) {
    profilePhotoURL = `${process.env.PROFILE_BASE_URL}${actor.profile_path}`;
  } else {
    profilePhotoURL = "../img/body/question.png";
  }

  return (
    <>
      <div
        key={item}
        className="actor-card"
        onClick={() => {
          setActorId(actor.id);
          setActorKnownWorks(actor.known_for);
        }}
      >
        <Link to={`/popular-actors/${urlWeb(actor.name)}`}>
          {actor.profile_path && (
            <img
              className="profile-photo"
              src={profilePhotoURL}
              alt={actor.name}
            />
          )}
          <h3>{actor.name}</h3>
        </Link>
      </div>
    </>
  );
}

export default ActorCard;
