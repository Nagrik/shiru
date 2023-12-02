// create reusable button component
import styles from "./styles.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}
function Button(props: ButtonProps) {
  const { children, onClick } = props;
  return (
    <button type="button" className={styles.button} onClick={() => onClick}>
      {children}
    </button>
  );
}

export default Button;
