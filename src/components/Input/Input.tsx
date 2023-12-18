import { forwardRef } from "react";
import styles from "./Input.module.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input {...props} ref={ref} className={styles.input} />;
});

export default Input;
