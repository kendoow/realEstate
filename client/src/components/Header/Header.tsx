import { FC, useState } from "react";
import { Link } from "react-router-dom";

import Modal from "../../helpers/Modal/Modal";

import styles from './Header.module.scss';

import logo from '../../assets/Main/logo.svg';

const Header: FC = () => {
    const [activeLogin, setActiveLogin] = useState(false)
    const [activeSiginIn, setActiveSiginIn] = useState(false)
    
    return (
        <div className={styles.Container}>
            <Link to='/'>
                <img className={styles.Logo} src={logo} />
            </Link>
            <div className={styles.BlockLink}>
                <a href='tel:+79999998877'>+7 999 999 88 77</a>
                <a href="mailto:Mail@gmail.com">Mail@gmail.com</a>
                <div>Каталог</div>
                <div>На карте</div>
                <div>FAQ</div>
            </div>
            <div className={styles.BlockBtn}>
                <button onClick={() => setActiveLogin(true)} className={styles.Login}>Войти</button>
                <button onClick={() => setActiveSiginIn(true)} className={styles.Registration}>Зарегистрироваться</button>
            </div>
            <Modal active={activeLogin} setActive={setActiveLogin}>
                11
            </Modal>
            <Modal active={activeSiginIn} setActive={setActiveSiginIn}>
                22
            </Modal>
        </div>
    )
}

export default Header;