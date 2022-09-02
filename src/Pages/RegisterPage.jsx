import React from 'react'
import FormRegister from '../components/FormRegister'
import Icon from '/static/img/body/netflixLogo.png';

function RegisterPage() {
  return (
    <>
      <div className='form-section'>
        <a className="logo" href="https://www.netflix.com/" target="_blank"><img src={Icon}/></a>
        <FormRegister />
      </div>
    </>
  )
}

export default RegisterPage



{/* <img src="/static/image.png"/> */}