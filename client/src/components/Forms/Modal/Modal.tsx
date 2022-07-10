import { FC, useState } from "react";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Restore from "../Restoring/Restore";
import styles from "./Modal.module.scss";
import { ModalProps } from "./Modal.types";

const Modal: FC<ModalProps> = ({ active, setActive, setPage, page}):JSX.Element => {

 

  return (
    <div
      className={active ? styles.active : styles.modal}
      onClick={() => setActive(false)}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {page === 'restore' && <Restore setPage={setPage} setActive={setActive}/> }
        {page === 'registration' && <Registration setPage={setPage} setActive={setActive}/> }
        {page === 'login' && <Login setPage={setPage} setActive={setActive}/> }

      </div>
    </div>
  );
};

export default Modal;