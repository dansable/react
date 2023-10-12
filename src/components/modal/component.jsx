import {createPortal} from "react-dom";
import {Button} from "../button/component.jsx";

import styles from "./styles.module.scss";

export const Modal = ({children, onClose}) => {
  return (
    createPortal(
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <Button onClick={onClose}><>&times;</></Button>
        </div>
        {children}
      </div>, document.getElementById('modal-container'))
  );
}
