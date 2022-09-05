import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { login } from "../../helpers/firebase";
import { useAuth } from "../../context/AuthContext";

function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = await login(email, password);
    setEmail('');
    setPassword('');

    if (userInfo) {
      setUser(true);
      navigate('/homepage', {
        replace: true
      })
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form login">
        <h1 className="form-title">Oturum Aç</h1>
        <div className="form-group">
          <input className="form-group-input" type="text" required="true" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label className="form-group-label">Email veya telefon numarası</label>
        </div>
        <div className="form-group">
          <input className="form-group-input" type="password" required="true" value={password} onChange={(e) => setPassword(e.target.value)} />
          <label className="form-group-label">Şifre</label>
        </div>
        <button disabled={!email || !password} className="form-sign-in" type="submit">Oturum Aç</button>
        <div className="form-secondary-cta">
          <a className="form-secondary-cta-text" href="#">Beni Hatırla</a>
          <a className="form-secondary-cta-text form-secondary-cta-text--need-help" href="#">Yardım ister misin?</a>
        </div>
        <br />
        <div className="form-secondary-cta">
          <Link className="form-secondary-cta-text" to="/register">Netflix'e katılmak için şimdi kaydolun</Link>
        </div>
      </form>
    </>
  )
}

export default FormLogin