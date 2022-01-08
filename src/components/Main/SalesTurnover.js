import IconMore from "../../assets/IconMore.png";
import Cart from "../../assets/SalesTurnover.png";
import DownArrow from "../../assets/DownArrow.png";

import classes from "./SalesTurnover.module.css";

const SalesTurnover = () => {
  return (
    <div className={classes.salesTurnover}>
      <div className={classes.header}>
        <h1 className={classes.title}>Sales Turnover</h1>
        <img className={classes.icon} src={IconMore} alt="IconMore" />
      </div>
      <div className={classes.item}>
        <div>
          <p className={classes.itemPrice}>Rp 3,600,000</p>
          <p className={classes.itemInfo}>
            <img className={classes.downArrow} src={DownArrow} alt="DownArrow" />
            <span className={classes.itemPercentage}> 13.8%</span> last period in products sold
          </p>
        </div>
        <img className={classes.itemImage} src={Cart} alt="Cart" />
      </div>
    </div>
  );
};

export default SalesTurnover;
