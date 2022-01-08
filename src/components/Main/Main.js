import MarketInsight from "./MarketInsight";
import SalesTurnover from "./SalesTurnover";

import classes from "./Main.module.css";
import ChartContainer from "./ChartContainer";
import BestSelling from "./BestSelling";

const Main = () => {
  return (
    <main>
      <h1 className={classes.title}>Dashboard</h1>
      <MarketInsight />
      <SalesTurnover />
      <div className={classes.content}>
        <ChartContainer />
        <BestSelling />
      </div>
    </main>
  );
};

export default Main;
