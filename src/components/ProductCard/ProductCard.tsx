import Button from "../Button/Button";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.productCard}>
      <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      <h2>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2>
      <p>109.95</p>
      <div className={styles.buttonGroup}>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </div>
    </div>
  );
};

export default ProductCard;
