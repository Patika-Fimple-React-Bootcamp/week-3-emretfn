import ProductList from "../../components/ProductList/ProductList";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.pageContainer}>
      <h3 className={styles.pageTitle}>Products</h3>
      <ProductList />
    </div>
  );
};

export default Home;
