import React from 'react'
import question from "/static/img/body/question.png";
import { getAuth } from "firebase/auth";
const auth = getAuth();

function ProfileBody() {
    let displayName;
    let userEmail;
    let lastSignIn;
    const user = auth.currentUser;
    if (user !== null) {
        console.log(user);
        user.providerData.forEach((profile) => {
        displayName= profile.displayName;
        userEmail = profile.email;
        lastSignIn = user.metadata.lastSignInTime;
        });
      }
  return (
    <>
    <div className='actor-main'>
        <div className='actor-wrapper'>
          <div className='actor-column'>
            {/* flex-left */}
            <div className="actor-img-section">
              <div className="actor-img">
                <img src={question} />
              </div>
            </div>
            {/* flex-right */}
            <div className="actor-info-section">
              <div className="actor-name">
                <span>{displayName}</span>
              </div>
              <div className="actor-biography center">
                <span>{"  Email: " + userEmail}</span> <br />
                <span>{"  Son giriş tarihi: " + lastSignIn}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileBody
