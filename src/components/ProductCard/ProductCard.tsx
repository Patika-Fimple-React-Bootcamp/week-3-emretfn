import { Product } from "../../types";
import Button from "../Button/Button";
import { Icons } from "../Icons/Icons";
import ProductEditModal from "../ProductEditModal/ProductEditModal";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (productId: number) => void;
}

const ProductCard = ({ product, onEdit, onDelete }: ProductCardProps) => {
  return (
    <div className={styles.productCard}>
      <img src={product.image} />
      <h2 title={product.title}>{product.title}</h2>
      <p>${product.price}</p>
      <div className={styles.buttonGroup}>
        <ProductEditModal product={product} onSave={onEdit} />
        <Button variant="danger" onClick={() => onDelete(product.id)}>
          <Icons.trash className="buttonIcon" />
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
