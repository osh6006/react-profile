import React from "react";
import { New } from "./New";

const Profile = ({ name = "", jobs = "", src = "", isNew = false }) => {
  return (
    <div className="profile">
      <img className="photo" src={src} alt="pic" />
      <h1>{name}</h1>
      <p>{jobs}</p>
      {isNew && <New />}
    </div>
  );
};

export default Profile;
