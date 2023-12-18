import { forwardRef } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "default" | "danger";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "default", ...props }, ref) => {
    const buttonClass = `${styles.button} ${styles[`variant-${variant}`]}`;

    return (
      <button ref={ref} className={buttonClass} {...props}>
        {children}
      </button>
    );
  }
);

export default Button;
