import { Product } from "../../types";
import Button from "../Button/Button";
import { Icons } from "../Icons/Icons";
import ProductEditModal from "../ProductEditModal/ProductEditModal";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
}

const ProductCard = ({ product, onEdit }: ProductCardProps) => {
  return (
    <div className={styles.productCard}>
      <img src={product.image} />
      <h2 title={product.title}>{product.title}</h2>
      <p>${product.price}</p>
      <div className={styles.buttonGroup}>
        <ProductEditModal product={product} onSave={onEdit} />
        <Button>
          <Icons.trash className="buttonIcon" />
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
