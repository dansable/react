import {Header} from "../components/header/component.jsx";
import classNames from "classnames";
import {Footer} from "../components/footer/component.jsx";

import styles from "./styles.module.scss";

export const Layout = ({children}) => {
  return (
    <>
      <div className={styles.page}>
        <Header className={styles.header}/>
        <main className={classNames('container', styles.container)}>
          {children}
        </main>
        <Footer/>
      </div>
      <div id="modal-container" className={styles.modalContainer}></div>
    </>
  )
}
