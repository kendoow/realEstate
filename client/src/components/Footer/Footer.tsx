import { FC, useState } from "react";
import {Link as ScrollLink } from 'react-scroll';
import { Link, useNavigate } from "react-router-dom";

import useTypedSelector from "../../hooks/useTypedSelector";

import Modal from "../Forms/Modal/Modal";


import styles from './Footer.module.scss';

import logo from '../../assets/Main/logo.svg';
import gpc from '../../assets/Main/gpc.svg';
import phone from '../../assets/Main/phone.svg';
import mail from '../../assets/Main/mail.svg';

const Footer: FC = () => {
    const navigate = useNavigate()
    const { isAuth } = useTypedSelector(state => state.authReducer)

    const [activeLogin, setActiveLogin] = useState<boolean>(false)

    const [activeModal, setActiveModal] = useState<boolean>(false)

    const [page, setPage] = useState<string>('')

    const favoriteHandler = () => {
        if(isAuth){
            navigate('/favorite')
        } else {
            setActiveModal(true)
            setPage('login')
        }
    }
    const profileHandler = () => {
        if(isAuth){
            navigate('/personal')
        } else {
            setActiveModal(true)
            setPage('login')
        }
    }

    const popularHandler = () => {
        navigate('/')
    }
    return (
        <div className={styles.Container}>
            <div className={styles.Block}>
                <h2 className={styles.Title}>Меню навигации</h2>
                
                <Link 
                 to ='/' 
                 className={styles.Btn}>
                    Главная
                </Link>
                <button
                 onClick={() => favoriteHandler()} 
                 className={styles.Btn}>
                    Избранное
                </button>
                
                <ScrollLink
                 onMouseDown={() => popularHandler()} // срабатывает после  
                 activeClass="active"
                 to="popular"
                 spy={true}
                 smooth={true}
                 offset={-70}
                 duration={500}
                 className={styles.Btn}>
                        Популярное
                </ScrollLink>                
                 
                <button
                 onClick={profileHandler} 
                 className={styles.Btn}>
                    Личный кабинет
                </button>
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

            <Modal page={page} setPage={setPage} active={activeModal} setActive={setActiveModal}/>
                
        </div>
    )
}

export default Footer;