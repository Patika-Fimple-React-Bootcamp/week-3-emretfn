import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";
import { Product } from "../../types";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data: Product[] = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
