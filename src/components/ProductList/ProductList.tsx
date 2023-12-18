import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";

const ProductList = () => {
  return (
    <div className={styles.productList}>
      <ProductCard />
    </div>
  );
};

export default ProductList;
