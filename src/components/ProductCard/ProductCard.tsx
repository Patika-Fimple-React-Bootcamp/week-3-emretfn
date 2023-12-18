import { Product } from "../../types";
import Button from "../Button/Button";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.productCard}>
      <img src={product.image} />
      <h2 title={product.title}>{product.title}</h2>
      <p>${product.price}</p>
      <div className={styles.buttonGroup}>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </div>
    </div>
  );
};

export default ProductCard;
