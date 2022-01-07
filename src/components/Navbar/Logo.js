import logo from "../../assets/advotics-logo.jpg";

import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.title}>
      <img src={logo} alt="logo" className={classes.mainLogo} />
      <p>powered by</p>
      <img src={logo} alt="logo" className={classes.secondaryLogo} />
    </div>
  );
};

export default Logo;
