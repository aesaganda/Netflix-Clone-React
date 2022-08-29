import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from "../Pages/HomePage";
import MoviePage from "../Pages/MoviePage";
import PopularActors from "../Pages/PopularActors";
import ActorInfoPage from "../Pages/ActorInfoPage";
import MyList from "../Pages/MyList";
import LoginPage from "../Pages/LoginPage";
import SearchPage from "../Pages/SearchPage";
import Page404 from '../Pages/Page404';

function MainRoute() {
  return (
    <>
        <Routes>
            <Route path="/" element={< HomePage />} />
            <Route path="/movies-series" element={< MoviePage />} />
            <Route path="/popular-actors" element={< PopularActors />} />
            <Route path='/popular-actors/:actorName' element={<ActorInfoPage />} />
            <Route path="/my-list" element={< MyList />} />
            <Route path="/login" element={< LoginPage />} />
            <Route path="/search" element={< SearchPage />} />
            <Route path="*" element={< Page404 />} />

          </Routes>
    </>
  )
}

export default MainRoute