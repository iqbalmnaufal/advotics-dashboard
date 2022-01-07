import dashboardIcon from "../../assets/Dashboard-icon.png";

import classes from "./Aside.module.css";

const Aside = () => {
  return (
    <aside>
      <div className={classes.hamburgerContainer}>
        <div className={classes.hamburger}></div>
        <div className={classes.hamburger}></div>
        <div className={classes.hamburger}></div>
      </div>
      <div className={classes.dashboardIconContainer}>
        <img className={classes.dashboardIcon} src={dashboardIcon} alt="Dashboard Icon" />
      </div>
    </aside>
  );
};

export default Aside;
