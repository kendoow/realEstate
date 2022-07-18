import { FC, useEffect } from "react";

import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Restore from "../Restoring/Restore";

import { ModalProps } from "./Modal.types";

import styles from "./Modal.module.scss";

import close from '../../../assets/Main/close.svg';

const Modal: FC<ModalProps> = ({ active, setActive, setPage, page }): JSX.Element => {

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : 'auto'
  }, [active])

  return (
    <div
      className={active ? styles.Active : styles.Container}
      onClick={() => setActive(false)}
    >
      <div className={styles.Content} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setActive(false)}
          className={styles.CloseBtn}
        >
          <img 
            src={close} 
            alt="Close Icon" 
          />
        </button>
        {page === 'restore' && <Restore setPage={setPage} setActive={setActive} />}
        {page === 'registration' && <Registration setPage={setPage} setActive={setActive} />}
        {page === 'login' && <Login setPage={setPage} setActive={setActive} />}

      </div>
    </div>
  );
};

export default Modal;