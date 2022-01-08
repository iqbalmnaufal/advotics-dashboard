import MarketInsight from "./MarketInsight";
import SalesTurnover from "./SalesTurnover";

import classes from "./Main.module.css";

const Main = () => {
  return (
    <main>
      <h1 className={classes.title}>Dashboard</h1>
      <MarketInsight />
      <SalesTurnover />
    </main>
  );
};

export default Main;
