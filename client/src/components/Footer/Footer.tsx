import { FC } from "react";

import styles from './Footer.module.scss';

import logo from '../../assets/Main/logo.svg';
import gpc from '../../assets/Main/gpc.svg';
import phone from '../../assets/Main/phone.svg';
import mail from '../../assets/Main/mail.svg';
import {Link as ScrollLink} from 'react-scroll';
import { Link } from "react-router-dom";

const Footer: FC = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.Block}>
                <h2 className={styles.Title}>Меню навигации</h2>
                <Link to ='/' className={styles.Btn}>Главная</Link>
                <button className={styles.Btn}>Избранное</button>
                
                <ScrollLink
                    activeClass="active"
                    to="popular"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                 className={styles.Btn}>Популярное</ScrollLink>
                 
                <button className={styles.Btn}>Личный кабинет</button>
            </div>
            <div className={styles.Block}>
                <h2 className={styles.Title}>Контакты</h2>
                <a href='tel:+79660406664' className={styles.Contacts}>
                    <img src={phone} alt="phone" />
                    <p>+7-966-040-66-64</p>
                </a>
                <a href="mailto:alterzidan@yandex.ru" className={styles.Contacts}>
                    <img src={mail} alt="mail" />
                    <p>alterzidan@yandex.ru</p>
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