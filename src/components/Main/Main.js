import MarketInsight from "./MarketInsight";
import SalesTurnover from "./SalesTurnover";

import classes from "./Main.module.css";
import ChartContainer from "./ChartContainer";
import BestSelling from "./BestSelling";
import TopCompetitor from "./TopCompetitor";
import Period from "./Period";

const Main = () => {
  return (
    <main>
      <div className={classes.header}>
        <h1 className={classes.title}>Dashboard</h1>
        <Period />
      </div>
      <MarketInsight />
      <SalesTurnover />
      <div className={classes.content}>
        <ChartContainer />
        <BestSelling />
        <TopCompetitor />
      </div>
    </main>
  );
};

export default Main;
