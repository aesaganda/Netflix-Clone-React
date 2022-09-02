import React from 'react'
import { Link } from 'react-router-dom';
import DropDown from "../components/DropDown";

function Header() {
  return (
    <>
      <div className='header' style={{ color: "white" }}>
        <div className='header-left'>
          <div className='netflix-logo'>
          <Link to="/homepage"><img src="../static/img/header/netflixlogosvg@2x.svg" title="https://www.netflix.com/tr/" /></Link>
          </div>
          <div className='navbar' id="navbar-display">
            <div class="navbar-link-homepage text-white">
              <Link to="/homepage">Ana Sayfa</Link>
            </div>
            <div class="navbar-link-series text-white">
              <Link to="/movies-series">Diziler</Link>
            </div>
            <div class="navbar-link-movies text-white">
              <Link to="/movies-series">Filmler</Link>
            </div>
            <div class="navbar-link-popular">
              <Link to="/popular-actors">Popüler Oyuncular</Link>
            </div>
            <div class="navbar-link-myList text-white">
              <Link to="/my-list">Listem</Link>
            </div>
          </div>
        </div>
        {/* <!-- * header-left-end  -->*/}
        <div className='header-right'>
          <div class="search-button header-right-display ">
            <Link to="/search"><img src="../static/img/header/search@2x.svg" alt="search-button" /></Link>
          </div>
          <div class="giftbox header-right-display">
            <a href="#"><img src="../static/img/header/giftbox@2x.svg" alt="giftbox" /></a>
          </div>
          <div class="notificationbell header-right-display">
            <a href="#"><img src="../static/img/header/notificationbell@2x.svg" alt="notification-bell" /></a>
          </div>
          <div class="profile header-right-display">
            <Link to="/profile"><img src="../static/img/header/profileimg@2x.png" alt="profile" /></Link>
          </div>
          <div class="down-bar">
            <DropDown />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header