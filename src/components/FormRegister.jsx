import React from 'react'
import { Link } from 'react-router-dom'

function FormRegister() {
    return (
        <div>
            <div className="form register">
                <h1 className="form-title">Kayıt Ol</h1>
                <div className="form-group">
                    <input className="form-group-input" type="text" required="true" />
                    <label className="form-group-label">Email veya telefon numarası</label>
                </div>
                <div className="form-group">
                    <input className="form-group-input" type="password" required="true" />
                    <label className="form-group-label">Şifre</label>
                </div>
                <div className="form-group">
                    <input className="form-group-input" type="text" required="true" />
                    <label className="form-group-label">İsim</label>
                </div>
                <div className="form-group">
                    <input className="form-group-input" type="text" required="true" />
                    <label className="form-group-label">Soyisim</label>
                </div>
                <button className="form-sign-in" type="button">Kayıt Ol</button>
                <div className="form-secondary-cta">
                    <Link className="form-secondary-cta-text form-secondary-cta-text--need-help" to="/homepage">Yardım ister misin?</Link>
                </div>
            </div>
        </div>
    )
}

export default FormRegister