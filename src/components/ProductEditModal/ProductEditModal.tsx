import * as Dialog from "@radix-ui/react-dialog";
import Button from "../Button/Button";
import styles from "./ProductEditModal.module.css";
import { Icons } from "../Icons/Icons";
import Input from "../Input/Input";
import { Product } from "../../types";
import { useState } from "react";
import FormField from "../FormField/FormField";

interface ProductEditModalProps {
  product: Product;
  onSave: (product: Product) => void;
}

const ProductEditModal = ({ product, onSave }: ProductEditModalProps) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Product>(product);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(data);
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button>
          <Icons.pencil className="buttonIcon" />
          Edit
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content className={styles.DialogContent}>
          <Dialog.Title className={styles.DialogTitle}>Edit Product</Dialog.Title>
          {/* Modal Content */}
          <form onSubmit={handleSubmit} className={styles.form}>
            <FormField
              label="Product Title"
              htmlFor="title"
              render={() => (
                <Input
                  type="text"
                  id="title"
                  name="title"
                  value={data.title}
                  onChange={handleChange}
                />
              )}
            />
            <FormField
              label="Product Price"
              htmlFor="price"
              render={() => (
                <Input
                  type="text"
                  id="price"
                  name="price"
                  value={data.price}
                  onChange={handleChange}
                />
              )}
            />
            <FormField
              label="Product Image"
              htmlFor="image"
              render={() => (
                <Input
                  type="text"
                  id="image"
                  name="image"
                  value={data.image}
                  onChange={handleChange}
                />
              )}
            />
            <Button type="submit">Save</Button>
          </form>
          <Dialog.Close asChild>
            <button aria-label="Close" className={styles.DialogCloseButton}>
              <Icons.close className="icon" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ProductEditModal;
