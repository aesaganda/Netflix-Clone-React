import React from 'react'
import FormLogin from '../components/FormLogin'
import Icon from "/static/img/body/netflixLogo.png";

function LoginPage() {
  const myIcon = new Image();
  myIcon.src = Icon;

  return (
    <>
      <div className='form-section'>
        <a className="logo" href="https://www.netflix.com/" target="_blank"><img src={myIcon.src} /></a>
        <FormLogin />
      </div>
    </>
  )
}

export default LoginPage