import React from 'react';
import userIcon from "../images/userIcon.png";

const User = ({ user }) => {
  return (
    <div className="user-card-item">
      <div className="user-card-wrapper">
        <div className="img-wrapper">
          <img src={userIcon} alt="user icon" />
        </div>
        <div className="user-details-wrapper">
          <h2>{user.name}</h2>
          <p>works at <b>{user.company.name}</b></p>
          <p>lives in <b>{user.address.city}</b></p>
          <p>goes by <b>{user.username}</b></p>
          <p>can be reached at <b>{user.email}</b></p>
          <p>favorite catchphrase is <i>{user.company.catchPhrase}</i></p>
        </div>
      </div>
    </div>
  )
}

export default User;