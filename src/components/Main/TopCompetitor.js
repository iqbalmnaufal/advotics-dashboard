import IconMore from "../../assets/IconMore.png";
import photoProduct from "../../assets/ProductCompetitor.png";

import classes from "./TopCompetitor.module.css";

const TopCompetitor = () => {
  return (
    <div className={classes.topCompetitor}>
      <div className={classes.header}>
        <h2 className={classes.title}>TOP COMPETITOR SKU</h2>
        <img className={classes.iconMore} src={IconMore} alt="Icon more" />
      </div>
      <div className={classes.bestCompetitor}>
        <img src={photoProduct} alt="Product" />
        <div className={classes.bestCompetitorInfo}>
          <h3 className={classes.bestCompetitorTitle}>Susu Sapi</h3>
          <div className={classes.infoPrice}>
            <p>Rp 20000</p>
            <p>32 pcs</p>
          </div>
        </div>
      </div>
      <div className={classes.competitors}>
        <img src={photoProduct} alt="Product" />
        <div className={classes.competitorsInfo}>
          <h3 className={classes.competitorsTitle}>Paracetamol</h3>
          <div className={classes.productsPrice}>
            <p>Rp 20000</p>
            <p>32 pcs</p>
          </div>
        </div>
      </div>
      <div className={classes.competitors}>
        <img src={photoProduct} alt="Product" />
        <div className={classes.competitorsInfo}>
          <h3 className={classes.competitorsTitle}>Susu Kedelai</h3>
          <div className={classes.productsPrice}>
            <p>Rp 20000</p>
            <p>32 pcs</p>
          </div>
        </div>
      </div>
      <div className={classes.competitors}>
        <img src={photoProduct} alt="Product" />
        <div className={classes.competitorsInfo}>
          <h3 className={classes.competitorsTitle}>Susu Kambing</h3>
          <div className={classes.productsPrice}>
            <p>Rp 20000</p>
            <p>32 pcs</p>
          </div>
        </div>
      </div>
      <div className={classes.competitors}>
        <img src={photoProduct} alt="Product" />
        <div className={classes.competitorsInfo}>
          <h3 className={classes.competitorsTitle}>Nutrisari</h3>
          <div className={classes.productsPrice}>
            <p>Rp 20000</p>
            <p>32 pcs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCompetitor;
