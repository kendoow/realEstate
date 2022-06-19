import { FC } from "react";

import styles from './Footer.module.scss';

import logo from '../../assets/Main/logo.svg';
import gpc from '../../assets/Main/gpc.svg';
import phone from '../../assets/Main/phone.svg'; 
import mail from '../../assets/Main/mail.svg';

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
                <a href='tel:+79999998877' className={styles.Contacts}>
                    <img src={phone} alt="" />
                    <p>+7 999 999 88 77</p>
                </a>
                <a href="mailto:Mail@gmail.com" className={styles.Contacts}>
                    <img src={mail} alt="" />
                    <p >Mail@gmail.com</p>
                </a >

            </div>
            <div className={styles.BlockLogo}>
                <img src={logo} />
                <img src={gpc} className={styles.Gpc} />
            </div>
        </div>
    )
}

export default Footer;