import IconMore from "../../assets/IconMore.png";
import photoProduct from "../../assets/ProductCompetitor.png";

import classes from "./BestSelling.module.css";

const BestSelling = () => {
  return (
    <div className={classes.bestSelling}>
      <div className={classes.header}>
        <h2 className={classes.title}>BEST SELLING SKU</h2>
        <img className={classes.iconMore} src={IconMore} alt="Icon more" />
      </div>
      <div className={classes.bestProduct}>
        <img src={photoProduct} alt="Product" />
        <div className={classes.bestProductInfo}>
          <h3 className={classes.bestProductTitle}>Susu Sapi</h3>
          <div className={classes.infoPrice}>
            <p>Rp 20000</p>
            <p>32 pcs</p>
          </div>
        </div>
      </div>
      <div className={classes.products}>
        <img src={photoProduct} alt="Product" />
        <div className={classes.productsInfo}>
          <h3 className={classes.productsTitle}>Susu Sapi</h3>
          <div className={classes.productsPrice}>
            <p>Rp 20000</p>
            <p>32 pcs</p>
          </div>
        </div>
      </div>
      <div className={classes.products}>
        <img src={photoProduct} alt="Product" />
        <div className={classes.productsInfo}>
          <h3 className={classes.productsTitle}>Susu Sapi</h3>
          <div className={classes.productsPrice}>
            <p>Rp 20000</p>
            <p>32 pcs</p>
          </div>
        </div>
      </div>
      <div className={classes.products}>
        <img src={photoProduct} alt="Product" />
        <div className={classes.productsInfo}>
          <h3 className={classes.productsTitle}>Susu Sapi</h3>
          <div className={classes.productsPrice}>
            <p>Rp 20000</p>
            <p>32 pcs</p>
          </div>
        </div>
      </div>
      <div className={classes.products}>
        <img src={photoProduct} alt="Product" />
        <div className={classes.productsInfo}>
          <h3 className={classes.productsTitle}>Susu Sapi</h3>
          <div className={classes.productsPrice}>
            <p>Rp 20000</p>
            <p>32 pcs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
