import styles from "./FormField.module.css";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  render: () => JSX.Element;
}

const FormField = ({ render, label, htmlFor }: FormFieldProps) => {
  return (
    <div className={styles.formField}>
      <label htmlFor={htmlFor}>{label}</label>
      {render()}
    </div>
  );
};

export default FormField;
