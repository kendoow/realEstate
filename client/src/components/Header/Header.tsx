import { FC } from "react";

import styles from './Header.module.scss';

import logo from '../../assets/Main/logo.svg';

const Header: FC = () => {
    return (
        <div className={styles.Container}>
            <img className={styles.Logo} src={logo}/>
            <div className={styles.BlockLink}>
                <div>+7 999 999 88 77</div>
                <div>Mail@gmail.com</div>
                <div>Каталог</div>
                <div>На карте</div>
                <div>FAQ</div>
            </div>
            <div className={styles.BlockBtn}>
                <button className={styles.Login}>Войти</button>
                <button className={styles.Registration}>Зарегистрироваться</button>
            </div>
        </div>
    )
}

export default Header;