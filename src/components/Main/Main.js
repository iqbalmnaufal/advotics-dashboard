import MarketInsight from "./MarketInsight";
import SalesTurnover from "./SalesTurnover";

import classes from "./Main.module.css";
import PurchaseValue from "./PurchaseValue";

const Main = () => {
  return (
    <main>
      <h1 className={classes.title}>Dashboard</h1>
      <MarketInsight />
      <SalesTurnover />
      <PurchaseValue />
    </main>
  );
};

export default Main;
