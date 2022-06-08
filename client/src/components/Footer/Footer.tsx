import { FC } from "react";

import styles from './Footer.module.scss';

import logo from '../../assets/Main/logo.svg';
import gpc from '../../assets/Main/gpc.svg';

const Footer: FC = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.Block}>
                <h2 className={styles.Title}>Меню навигации</h2>
                <button className={styles.Btn}>Главная</button>
                <button className={styles.Btn}>Избранное</button>
                <button className={styles.Btn}>Популярное</button>
                <button className={styles.Btn}>Личный кабинет</button>
            </div>
            <div className={styles.Block}>
                <h2 className={styles.Title}>Контакты</h2>
                <button className={styles.Btn}>+79999998877</button>
                <button className={styles.Btn}>Mail@gmail.com</button>
            </div>
            <div className={styles.BlockLogo}>
                <img src={logo}/>
                <img src={gpc} className={styles.Gpc}/>
            </div>
        </div>
    )
}

export default Footer;