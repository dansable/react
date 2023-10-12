import classNames from "classnames";
import styles from "./styles.module.scss";
import {useContext} from "react";
import {ThemeContext} from "../../contexts/theme.jsx";

export const Button = ({children, onClick, disabled, size, type, active = false, htmlType = 'button'}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <button onClick={onClick}
            disabled={disabled}
            type={htmlType}
            className={
              classNames(
                styles.button,
                styles[size],
                styles[type],
                styles[theme],
                {
                  [styles.active]: active,
                })
            }>
      {children}
    </button>
  );
};
