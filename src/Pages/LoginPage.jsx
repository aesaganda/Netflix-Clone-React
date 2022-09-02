import React from 'react'
import FormLogin from '../components/FormLogin'
//
function LoginPage() {
  return (
    <>
      <div className='form-section'>
        <a className="logo" href="https://www.netflix.com/" target="_blank"><img src="../img/body/netflixLogo.png" /></a>
        <FormLogin />
      </div>
    </>
  )
}

export default LoginPage