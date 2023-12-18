import React from "react";
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

class ProductCard extends React.Component<ProductCardProps> {
  render() {
    return (
      <div className={styles.productCard}>
        <img src={this.props.product.image} />
        <h2 title={this.props.product.title}>{this.props.product.title}</h2>
        <p>${this.props.product.price}</p>
        <div className={styles.buttonGroup}>
          <ProductEditModal product={this.props.product} onSave={this.props.onEdit} />
          <Button variant="danger" onClick={() => this.props.onDelete(this.props.product.id)}>
            <Icons.trash className="buttonIcon" />
            Delete
          </Button>
        </div>
      </div>
    );
  }
}

export default ProductCard;
