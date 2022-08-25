import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className='header' style={{ color: "white" }}>
        <div className='header-left'>
          <div className='netflix-logo'>
            <img src="./img/header/netflixlogosvg@2x.svg" alt="netflix-logo" title="https://www.netflix.com/tr/" />
          </div>
          <div className='navbar' id="navbar-display">
            <div class="navbar-link-homepage text-white">
              <Link to="/">Ana Sayfa</Link>
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
        <div className='header-right' id="header-right-display">
          <div class="search-button">
            <Link to="/search"><img src="../img/header/search@2x.svg" alt="search-button" /></Link>
          </div>
          <div class="child">
            <a href="#">ÇOCUK</a>
          </div>
          <div class="giftbox">
            <a href="#"><img src="../img/header/giftbox@2x.svg" alt="giftbox" /></a>
          </div>
          <div class="notificationbell">
            <a href="#"><img src="../img/header/notificationbell@2x.svg" alt="notification-bell" /></a>
          </div>
          <div class="profile">
            <a href="#"><img style={{ width: "25px" }} src="../img/header/profileimg@2x.png" alt="profile" /></a>
          </div>
          <div class="down-bar">
            <a href="#"><img src="../img/header/downarrow@2x.svg" alt="down-bar" /></a>
          </div>
        </div>
        {/* <!-- * header-right-end  --> */}
      </div>
    </>
  )
}

export default Header