import React from 'react'
import ActorCard from '../components/ActorCard';

function ActorBody({data}) {
 const  actors = data.pop();
  return (
    <>
        <div className='main-actors-list'>
        <div className='title'>
          <h3> Popüler Oyuncular</h3>
        </div>
        <div className='sub-actor-list'>
          {
            actors &&
            actors.map((actor, item) => {
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