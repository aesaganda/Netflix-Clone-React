import React from 'react'
import ActorCard from '../components/ActorCard';
import { MovieContext, useContext } from '../context/MovieContext';

function ActorBody() {
 const {actorsInfo} = useContext(MovieContext);

  return (

    <>
        <div className='main-actors-list'>
        <div className='title'>
          <h3> Popüler Oyuncular</h3>
        </div>
        <div className='sub-actor-list'>
          {
            actorsInfo &&
            actorsInfo.map((actor, item) => {
              return (
                <ActorCard actor={actor} item={item} />
              );
            })
          }
        </div>
      </div>
    </>
  )
}

export default ActorBody