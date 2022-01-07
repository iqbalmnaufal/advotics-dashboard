import Logo from "./Logo";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <Logo />
    </nav>
  );
};

export default Navbar;
