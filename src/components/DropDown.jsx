import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom';

function DropDown() {
const [open, setOpen] = useState(false);
let menuRef = useRef();

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
},[]);

    return (
        <div className='menu-container' ref={menuRef}>
            <div className='menu-trigger' onClick={() => { setOpen(!open) }}>
            <img src="../img/header/downarrow@2x.svg" alt="down-bar" />
            </div>

            <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
                <ul>
                    <DropdownItem img={"../../img/header/user.png"}       text={"Profilim"}        link={"/"}/>
                    <DropdownItem img={"../../img/header/apps.png"}       text={"Dizi-Film"}       link={"/movies-series"}/>
                    <DropdownItem img={"../../img/header/users-alt.png"}  text={"Aktör-Aktris"}    link={"/popular-actors"}/>
                    <DropdownItem img={"../../img/header/list-check.png"} text={"Listem"}          link={"/my-list"}/>
                    <DropdownItem img={"../../img/header/search.png"}  text={"Ara"}             link={"/search"}/>
                    <DropdownItem img={"../../img/header/settings.png"}   text={"Ayarlar"}         link={"/"}/>
                    <DropdownItem img={"../../img/header/question.png"}   text={"Yardım"}          link={"/"}/>
                    <DropdownItem img={"../../img/header/log-out.png"}    text={"Profilden Çıkış"} link={"/"}/>
                </ul>
            </div>
        </div>

    )
}

function DropdownItem(props){
    return(
      <li className = 'dropdownItem'>
        <img src={props.img}></img>
        <Link to={props.link}>{props.text} </Link>
      </li>
    );
  }

export default DropDown