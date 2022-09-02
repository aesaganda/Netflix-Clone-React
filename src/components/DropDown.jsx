import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../helpers/firebase';
import { useAuth } from "../context/AuthContext";
import downarrow      from "/static/img/header/downarrow@2x.svg";
import user           from "/static/img/header/user.png";
import movie_series   from "/static/img/header/apps.png";
import actors         from "/static/img/header/users-alt.png";
import list_check     from "/static/img/header/list-check.png";
import search         from "/static/img/header/search.png";
import settings       from "/static/img/header/settings.png";
import help           from "/static/img/header/question.png";
import logoutvariable from "/static/img/header/log-out.png";

function DropDown() {
  const [open, setOpen] = useState(false);
  let menuRef = useRef();
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleLogout = async () => {
      await logout();
      setUser(false);
      navigate('/login',{
        replace: true
    })
  }

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    }
  }, []);

  return (
    <div className='menu-container' ref={menuRef}>
      <div className='menu-trigger' onClick={() => { setOpen(!open) }}>
        <img src={downarrow} alt="down-bar" />
      </div>

      <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
        <ul>
          <DropdownItem img={user} text={"Profilim"} link={"/profile"} />
          <DropdownItem img={movie_series} text={"Dizi-Film"} link={"/movies-series"} />
          <DropdownItem img={actors} text={"Aktör-Aktris"} link={"/popular-actors"} />
          <DropdownItem img={list_check} text={"Listem"} link={"/my-list"} />
          <DropdownItem img={search} text={"Ara"} link={"/search"} />
          <DropdownItem img={settings} text={"Ayarlar"} link={"/"} />
          <DropdownItem img={help} text={"Yardım"} link={"/"} />
          <li className='dropdownItem'>
            <img src={logoutvariable}></img>
            <span onClick={handleLogout}>{"Profilden Çıkış"} </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

function DropdownItem(props) {
  return (
    <li className='dropdownItem'>
      <img src={props.img}></img>
      <Link to={props.link}>{props.text}</Link>
    </li>
  );
}

export default DropDown