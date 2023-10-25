import styles from "./styles.module.scss";
import classNames from "classnames";
import {Button} from "../button/component.jsx";
import {useContext} from "react";
import {ThemeContext} from "../../contexts/theme.jsx";
import {NavLink} from "react-router-dom";

export const Header = ({className}) => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <header className={classNames(styles.header, className)}>
      <div className={classNames('container', styles.container)}>
        <div className={styles.title}>Restorante</div>
        <div>
          <nav className={styles.navigation}>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({isActive}) =>
                    classNames({[styles.active]: isActive})
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/restaurants"
                  className={({isActive}) =>
                    classNames({[styles.active]: isActive})
                  }
                >
                  Restaurants
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Button type="secondary" onClick={toggleTheme}>Toggle theme: {theme}</Button>
        </div>
      </div>
    </header>
  );
}
