import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import useTypedSelector from "../../hooks/useTypedSelector";
import useOnClickOutside from "../../hooks/useOnClickOutside";

import Modal from "../../helpers/Modal/Modal";
import Login from "../Forms/Login/Login";
import Registration from "../Forms/Registration/Registration";

import styles from './Header.module.scss';

import logo from '../../assets/Main/logo.svg';
import heart from '../../assets/Main/heart-header.svg'
import userIcon from '../../assets/Main/userIcon.svg'
import ToggleList from "../../helpers/Header/ToggleList/ToggleList";

const Header: FC = () => {
    const { isAuth } = useTypedSelector(state => state.authReducer)

    let accessToken = localStorage.getItem('accessToken') 

    const [activeLogin, setActiveLogin] = useState<boolean>(false)
    const [activeSiginIn, setActiveSiginIn] = useState<boolean>(false)

    useEffect(() => {
        accessToken = localStorage.getItem('accessToken')
    }, [isAuth])    

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
        style={accessToken ? { "backgroundColor": '#D9D9D9' } : { "backgroundColor": '#686868' }} 
        className={styles.Container}>
            <Link to='/'>
                <img className={styles.Logo} src={logo} />
            </Link>
            <div className={accessToken ? styles.BlockLinkAuth : styles.BlockLink}>
                <a href='tel:+79660406664'>+7-966-040-66-64</a>
                <a href="mailto:alterzidan@yandex.ru">alterzidan@yandex.ru</a>
                <Link to='/catalog'>Каталог</Link>
                <div>На карте</div>
                <Link to ='/FAQ'>FAQ</Link>
            </div>

            {accessToken ?
                <>
                    <div className={styles.RightSideBar}>
                        <img src={heart} alt="heart" />
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
                                 valuesLink={['/personal', '/favorite', '/']}/>
                            </div>
                            <Link to='/personal' >
                                <img src={userIcon} alt="icon" />
                            </Link>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className={styles.BlockBtn}>
                        <button onClick={() => setActiveLogin(true)} className={styles.Login}>Войти</button>
                        <button onClick={() => setActiveSiginIn(true)} className={styles.Registration}>Зарегистрироваться</button>
                    </div>
                    <Modal active={activeLogin} setActive={setActiveLogin}>
                        <Login />
                    </Modal>
                    <Modal active={activeSiginIn} setActive={setActiveSiginIn}>
                        <Registration />
                    </Modal>
                </>

            }
        </div>
    )
}

export default Header;