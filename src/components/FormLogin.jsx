import React from 'react'
import { Link } from 'react-router-dom';

function FormLogin() {
  return (
    <>
        <div className="form login">
          <h1 className="form-title">Oturum Aç</h1>
          <div className="form-group">
            <input className="form-group-input" type="text" required="true" />
            <label className="form-group-label">Email veya telefon numarası</label>
          </div>
          <div className="form-group">
            <input className="form-group-input" type="password" required="true" />
            <label className="form-group-label">Şifre</label>
          </div>
          <button className="form-sign-in" type="button">Oturum Aç</button>
          <div className="form-secondary-cta">
            <a className="form-secondary-cta-text" href="#">Beni Hatırla</a>
            <a className="form-secondary-cta-text form-secondary-cta-text--need-help" href="#">Yardım ister misin?</a>
          </div>
            <br />
          <div className="form-secondary-cta">
            <Link className="form-secondary-cta-text" to="/register">Netflix'e katılmak için şimdi kaydolun</Link>
          </div>
        </div>
    </>
  )
}

export default FormLogin