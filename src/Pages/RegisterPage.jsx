import React from 'react'
import FormRegister from '../components/FormRegister'
// import Logo from 

function RegisterPage() {
  return (
    <>
      <div className='form-section'>
        <a className="logo" href="https://www.netflix.com/" target="_blank"><img src={'/img/body/netflixLogo.png'}/></a>
        <FormRegister />
      </div>
    </>
  )
}

export default RegisterPage



{/* <img src="/static/image.png"/> */}