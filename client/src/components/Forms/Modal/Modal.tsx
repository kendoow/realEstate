import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Restore from "../Restoring/Restore";
import styles from "./Modal.module.scss";
import { ModalProps } from "./Modal.types";

const Modal: FC<ModalProps> = ({ active, setActive, setPage, page }): JSX.Element => {

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : 'auto'
  }, [active])

  return (
    <div
      className={active ? styles.Active : styles.Modal}
      onClick={() => setActive(false)}
    >
      <div className={styles.ModalContent} onClick={(e) => e.stopPropagation()}>
        <div onClick={() => setActive(false)} className={styles.CloseBtn}>

        </div>
        {page === 'restore' && <Restore setPage={setPage} setActive={setActive} />}
        {page === 'registration' && <Registration setPage={setPage} setActive={setActive} />}
        {page === 'login' && <Login setPage={setPage} setActive={setActive} />}

      </div>
    </div>
  );
};

export default Modal;