import MarketInsight from "./MarketInsight";
import SalesTurnover from "./SalesTurnover";

import classes from "./Main.module.css";
import ChartContainer from "./ChartContainer";

const Main = () => {
  return (
    <main>
      <h1 className={classes.title}>Dashboard</h1>
      <MarketInsight />
      <SalesTurnover />
      <ChartContainer />
    </main>
  );
};

export default Main;
