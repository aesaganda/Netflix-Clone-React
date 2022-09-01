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
import RegisterPage from '../Pages/RegisterPage';
import Profile from '../Pages/Profile';
import PrivateRoute from './PrivateRoute';

function MainRoute() {
  return (
    <>
        <Routes>
            <Route path="/" element={< LoginPage />} />
            <Route path="/login" element={< LoginPage />} />
            <Route path="/register" element={< RegisterPage />} />
            <Route path="/homepage" element={<PrivateRoute> < HomePage /> </PrivateRoute>   } />
            <Route path="/movies-series" element={<PrivateRoute>< MoviePage /></PrivateRoute>} />
            <Route path="/popular-actors" element={<PrivateRoute>< PopularActors /></PrivateRoute>} />
            <Route path='/popular-actors/:actorName' element={<PrivateRoute><ActorInfoPage /></PrivateRoute>} />
            <Route path="/my-list" element={<PrivateRoute>< MyList /></PrivateRoute>} />
            <Route path="/search" element={<PrivateRoute>< SearchPage /></PrivateRoute>} />
            <Route path="/profile" element={ <PrivateRoute>< Profile /></PrivateRoute> } />
            <Route path="*" element={< Page404 />} />
          </Routes>
    </>
  )
}

export default MainRoute