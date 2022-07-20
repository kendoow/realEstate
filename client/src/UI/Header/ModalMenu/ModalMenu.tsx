import { FC } from "react";
import cn from 'classnames';
import { Link } from "react-router-dom";

import useTypedSelector from "../../../hooks/useTypedSelector";
import useTypedDispatch from "../../../hooks/useTypedDispatch";
import { authSelector } from "../../../redux/Slices/AuthSlice/AuthSelector";
import { logout } from "../../../redux/Slices/AuthSlice/AuthActionCreator";

import { ModalMenuProps } from "./ModalMenu.types";

import styles from './ModalMenu.module.scss';

import close from '../../../assets/Main/close.svg';
// import profile from '../../../assets/Personal/profile.svg';
// import favourite from '../../../assets/Personal/favorite.svg';
// import exit from '../../../assets/Personal/exit.svg';


const ModalMenu: FC<ModalMenuProps> = ({ className,
    active,
    setActive,
    loginHandler,
    registrationHandler,
    ...props }) => {
    const dispacth = useTypedDispatch()
    const { isAuth } = useTypedSelector(authSelector)

    const closeHandler = () => {
        setActive(false)
    }

    const activeLoginHandler = () => {
        closeHandler()
        loginHandler()
    }

    const activeRegistarationHandler = () => {
        closeHandler()
        registrationHandler()
    }

    const logoutHandler = () => {
        closeHandler()
        dispacth(logout())
    }

    return (
        <div
            className={cn(className, styles.Container, {
                [styles.Active]: active,
            })}
            {...props}
        >
            <div className={styles.Content}>
                <button
                    className={styles.BtnClose}
                    onClick={closeHandler}
                >
                    <img
                        src={close}
                        alt="Close Icon"
                    />
                </button>
                <Link
                    to='/catalog'
                    className={styles.Btn}
                >
                    Каталог
                </Link>
                <button className={styles.Btn}>
                    На карте
                </button>
                <Link
                    to='/FAQ'
                    className={styles.Btn}
                >
                    FAQ
                </Link>
                <a
                    className={styles.Btn}
                    href='tel:+79660406664'
                >
                    +7-966-040-66-64
                </a>
                <a
                    className={styles.Btn}
                    href="mailto:alterzidan@yandex.ru"
                >
                    alterzidan@yandex.ru
                </a>
                {
                    isAuth ?
                        <div className={styles.BlockAuth}>
                            <Link
                                className={styles.Btn}
                                to='/personal'
                            >
                                Профиль
                            </Link>
                            <Link
                                className={styles.Btn}
                                to='/favorite'
                            >
                                Избранное
                            </Link>
                            <button
                                className={styles.Btn}
                                onClick={logoutHandler}
                            >
                                Выйти
                            </button>
                        </div>
                        :
                        <div className={styles.BlockBtn}>
                            <button
                                className={styles.BtnLogin}
                                onClick={activeLoginHandler}
                            >
                                Войти
                            </button>
                            <button
                                className={styles.BtnRegistration}
                                onClick={activeRegistarationHandler}
                            >
                                Зарегистрироваться
                            </button>
                        </div>
                }
            </div>
        </div>
    )
}

export default ModalMenu;