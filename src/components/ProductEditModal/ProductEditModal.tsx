import * as Dialog from "@radix-ui/react-dialog";
import Button from "../Button/Button";
import styles from "./ProductEditModal.module.css";
import { Icons } from "../Icons/Icons";

const ProductEditModal = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Edit</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content className={styles.DialogContent}>
          <Dialog.Title className={styles.DialogTitle}>Edit Product</Dialog.Title>
          {/* Modal Content */}
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
