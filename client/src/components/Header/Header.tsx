import { FC, MouseEvent, useRef, useState } from "react";
import cn from 'classnames';
import { Link } from "react-router-dom";

import useTypedSelector from "../../hooks/useTypedSelector";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { authSelector } from "../../redux/Slices/AuthSlice/AuthSelector";

import Modal from "../Forms/Modal/Modal";
import ToggleList from "../../UI/Header/ToggleList/ToggleList";

import styles from './Header.module.scss';

import logo from '../../assets/Main/logo.svg';
import heart from '../../assets/Main/heart-header.svg';
import userIcon from '../../assets/Main/userIcon.svg';
import menu from '../../assets/Main/menu.svg';
import ModalMenu from "../../UI/Header/ModalMenu/ModalMenu";

const Header: FC = () => {
    const { isAuth } = useTypedSelector(authSelector)
    const [activeMenu, setActiveMenu] = useState<boolean>(false)

    const [activeModal, setActiveModal] = useState<boolean>(false)
    const [page, setPage] = useState<string>('')

    const menuHandler = () => {
        setActiveMenu(!activeMenu)
    }

    const loginHandler = () => {
        setPage('login')
        setActiveModal(true)
    }

    const registrationHandler = () => {
        setPage('registration')
        setActiveModal(true)
    }

    const [activeToggleList, setActiveToggleList] = useState(false)

    const activeToogleListHandler = (e: MouseEvent<HTMLDivElement>) => {
        e.currentTarget === e.target && setActiveToggleList(!activeToggleList)
    }

    const refToogleList = useRef(null)

    const closeHandler = () => {
        setActiveToggleList(false)
    }
    useOnClickOutside(refToogleList, () => closeHandler())

    return (
        <div
            className={cn(styles.Container, {
                [styles.Auth]: isAuth
            })}
        >
            <Link
                to='/'
                className={styles.Logo}
            >
                <img
                    src={logo}
                    alt='Logo Icon'
                />
            </Link>
            <div
                className={styles.Menu}
                onClick={menuHandler}
            >
                <img
                    src={menu}
                    alt="Menu Icon"
                />
                <ModalMenu
                    loginHandler={loginHandler}
                    registrationHandler={registrationHandler}
                    active={activeMenu}
                    setActive={setActiveMenu}
                />
            </div>

            <div className={isAuth ? styles.BlockLinkAuth : styles.BlockLink}>
                <Link to='/catalog'>Каталог</Link>
                <Link to='/map'>На карте</Link>
                <Link to='/FAQ'>FAQ</Link>
                <a href='tel:+79660406664'>+7-966-040-66-64</a>
                <a href="mailto:alterzidan@yandex.ru">alterzidan@yandex.ru</a>
            </div>

            {isAuth ?
                <>
                    <div className={styles.RightSideBar}>
                        <Link to='/favorite'>
                            <img
                                src={heart}
                                alt="heart"
                            />
                        </Link>
                        <div className={styles.UserPanel}>
                            <div
                                ref={refToogleList}
                                onClick={e => activeToogleListHandler(e)}
                                className={styles.BlockBarLine}>
                                <button className={styles.BarLine} />
                                <button className={styles.BarLine} />
                                <button className={styles.BarLine} />
                                <ToggleList
                                    active={activeToggleList}
                                    setActive={setActiveToggleList}
                                    values={['Профиль', 'Избранное', 'Выйти']}
                                    valuesLink={['/personal', '/favorite', '/']}
                                />
                            </div>
                            <Link
                                className={styles.LinkPersonal}
                                to='/personal'
                            >
                                <img
                                    src={userIcon}
                                    alt="icon"
                                />
                            </Link>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className={styles.BlockBtn}>
                        <button
                            onClick={() => loginHandler()}
                            className={styles.Login}
                        >
                            Войти
                        </button>
                        <button
                            onClick={() => registrationHandler()}
                            className={styles.Registration}
                        >
                            Зарегистрироваться
                        </button>
                    </div>

                    <Modal
                        page={page}
                        setPage={setPage}
                        active={activeModal}
                        setActive={setActiveModal}
                    />

                </>

            }
        </div>
    )
}

export default Header;