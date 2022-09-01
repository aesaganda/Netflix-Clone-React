import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../helpers/firebase';
import { useAuth } from "../context/AuthContext";

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
        <img src="../img/header/downarrow@2x.svg" alt="down-bar" />
      </div>

      <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
        <ul>
          <DropdownItem img={"../../img/header/user.png"} text={"Profilim"} link={"/profile"} />
          <DropdownItem img={"../../img/header/apps.png"} text={"Dizi-Film"} link={"/movies-series"} />
          <DropdownItem img={"../../img/header/users-alt.png"} text={"Aktör-Aktris"} link={"/popular-actors"} />
          <DropdownItem img={"../../img/header/list-check.png"} text={"Listem"} link={"/my-list"} />
          <DropdownItem img={"../../img/header/search.png"} text={"Ara"} link={"/search"} />
          <DropdownItem img={"../../img/header/settings.png"} text={"Ayarlar"} link={"/"} />
          <DropdownItem img={"../../img/header/question.png"} text={"Yardım"} link={"/"} />
          <li className='dropdownItem'>
            <img src={"../../img/header/log-out.png"}></img>
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