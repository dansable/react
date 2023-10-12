import styles from "./styles.module.scss";
import classNames from "classnames";
import {Button} from "../button/component.jsx";
import {useContext} from "react";
import {ThemeContext} from "../../contexts/theme.jsx";

export const Header = ({className}) => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <header className={classNames(styles.header, className)}>
      <div className={classNames('container', styles.container)}>
        <div className={styles.title}>Restorante</div>
        <div>
          <Button type="secondary" onClick={toggleTheme}>Toggle theme: {theme}</Button>
        </div>
      </div>
    </header>
  );
}
