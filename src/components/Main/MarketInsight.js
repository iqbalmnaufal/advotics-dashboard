import Help from "../../assets/Help.png";

import classes from "./MarketInsight.module.css";

const MarketInsight = () => {
  return (
    <div className={classes.marketInsight}>
      <p className={classes.title}>MARKET INSIGHTS</p>
      <div className={classes.help}>
        <img className={classes.helpLogo} src={Help} alt="Help" />
        <a className={classes.paragraph} href="/help">
          Click Here for Help
        </a>
        <p className={classes.arrow}>Λ</p>
      </div>
    </div>
  );
};

export default MarketInsight;
