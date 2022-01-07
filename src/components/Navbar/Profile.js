import profilePicture from "../../assets/Profile.png";
import logout from "../../assets/Logout.png";

import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div>
        <p className={classes.username}>Username</p>
        <p className={classes.companyName}>Company Name</p>
      </div>
      <img src={profilePicture} alt="Profile" className={classes.profilePicture} />
      <img src={logout} alt="Logout" className={classes.logout} />
    </div>
  );
};

export default Profile;
