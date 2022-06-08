import { FC } from "react";
import styles from "./Modal.module.scss";
import { ModalProps } from "./Modal.types";

const Modal: FC<ModalProps> = ({ active, setActive, children }):JSX.Element => {
  return (
    <div
      className={active ? styles.active : styles.modal}
      onClick={() => setActive(false)}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;