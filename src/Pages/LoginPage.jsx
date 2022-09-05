import React from 'react'
import FormLogin from '../components/Login-Register/FormLogin'
import Icon from "/static/img/body/netflixLogo.png";

function LoginPage() {
  return (
    <>
      <div className='form-section'>
        <a className="logo" href="https://www.netflix.com/" target="_blank"><img src={Icon} /></a>
        <FormLogin />
      </div>
    </>
  )
}

export default LoginPage