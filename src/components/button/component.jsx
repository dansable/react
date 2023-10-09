import classNames from "classnames";
import styles from "./styles.module.scss";

export const Button = ({title, onClick, disabled, size, type, active = false}) => {
  return (
    <button onClick={onClick}
            disabled={disabled}
            className={
              classNames(
                styles.button,
                styles[size],
                styles[type],
                {
                  [styles.active]: active,
                })
            }>
      {title}
    </button>
  );
};
