import Logo from "./Logo";

import classes from "./Navbar.module.css";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <Logo />
      <Profile />
    </nav>
  );
};

export default Navbar;
