import PurchaseValue from "./PurchaseValue";

import IconMore from "../../assets/IconMore.png";

import classes from "./ChartContainer.module.css";

const ChartContainer = () => {
  return (
    <div className={classes.chartContainer}>
      <div className={classes.header}>
        <h2 className={classes.title}>AVERAGE PURCHASE VALUE</h2>
        <div className={classes.selectContainer}>
          <select className={classes.select}>
            <option className={classes.option}>Last 6 Month</option>
            <option className={classes.option}>Last Year</option>
          </select>
          <img className={classes.iconMore} src={IconMore} alt="Icon More" />
        </div>
      </div>
      <PurchaseValue />
    </div>
  );
};

export default ChartContainer;
