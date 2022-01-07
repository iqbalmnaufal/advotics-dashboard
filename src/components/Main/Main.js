import classes from "./Main.module.css";
import MarketInsight from "./MarketInsight";

const Main = () => {
  return (
    <main>
      <h1 className={classes.title}>Dashboard</h1>
      <MarketInsight />
    </main>
  );
};

export default Main;
