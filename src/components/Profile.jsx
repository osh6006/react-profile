import React from "react";
import { Avatar } from "./Avatar";
import { New } from "./New";

const Profile = ({ name = "", jobs = "", src = "", isNew = false }) => {
  return (
    <div className="profile">
      <Avatar src={src} />
      <h1>{name}</h1>
      <p>{jobs}</p>
      {isNew && <New />}
    </div>
  );
};

export default Profile;
