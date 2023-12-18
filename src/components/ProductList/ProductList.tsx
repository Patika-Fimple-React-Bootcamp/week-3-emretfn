import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";
import { Product } from "../../types";
import { toast } from "sonner";
import { Icons } from "../Icons/Icons";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data: Product[] = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (product: Product) => {
    setProducts((prev) => prev.map((p) => (p.id === product.id ? product : p)));
    toast.success("Product updated successfully!");
  };

  const handleDelete = (productId: number) => {
    const isConfirmed = confirm("Are you sure you want to delete this product?");
    if (isConfirmed) {
      setProducts((prev) => prev.filter((p) => p.id !== productId));
    }
    toast.success("Product deleted successfully!");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.productList}>
      {isLoading ? (
        <Icons.loader className="spinner" />
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};

export default ProductList;
