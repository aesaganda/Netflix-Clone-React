import React from 'react'

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
              <a href="#">Ana Sayfa</a>
            </div>
            <div class="navbar-link-series text-white">
              <a href="#">Diziler</a>
            </div>
            <div class="navbar-link-movies text-white">
              <a href="#">Filmler</a>
            </div>
            <div class="navbar-link-popular">
              <a href="#">Yeni ve Popüler</a>
            </div>
            <div class="navbar-link-myList text-white">
              <a href="#">Listem</a>
            </div>
          </div>
        </div>
        {/* <!-- * header-left-end  -->*/}
        <div className='header-right' id="header-right-display">
          <div class="search-button">
            <a href="#"><img src="../img/header/search@2x.svg" alt="search-button"/></a>
          </div>
          <div class="child">
            <a href="#">ÇOCUK</a>
          </div>
          <div class="giftbox">
            <a href="#"><img src="../img/header/giftbox@2x.svg" alt="giftbox"/></a>
          </div>
          <div class="notificationbell">
            <a href="#"><img src="../img/header/notificationbell@2x.svg" alt="notification-bell"/></a>
          </div>
          <div class="profile">
            <a href="#"><img style={{width: "25px"}} src="../img/header/profileimg@2x.png" alt="profile"/></a>
          </div>
          <div class="down-bar">
            <a href="#"><img src="../img/header/downarrow@2x.svg" alt="down-bar"/></a>
          </div>
        </div>
        {/* <!-- * header-right-end  --> */}
      </div>
    </>
  )
}

export default Header