import React from 'react'
import ListMovieCard from '../components/ListMovieCard';
import { MovieContext, useContext } from '../context/MovieContext';

function ListBody() {
    const { listsMovie } = useContext(MovieContext);
    return (
        <div className='main-actors-list'>
            <div className='title'>
                <h3> Listem </h3>
            </div>
            <div className='sub-actor-list'>
                {
                    listsMovie &&
                    listsMovie.map((movie, item) => {
                        return (
                            <ListMovieCard movie={movie} item={item} />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default ListBody