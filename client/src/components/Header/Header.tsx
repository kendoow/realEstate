import { FC, useState } from "react";
import { Link } from "react-router-dom";

import Modal from "../../helpers/Modal/Modal";

import styles from './Header.module.scss';


import Login from "../Forms/Login/Login";
import Registration from "../Forms/Registration/Registration";
import useTypedSelector from "../../hooks/useTypedSelector";

import logo from '../../assets/Main/logo.svg';
import heart from '../../assets/Main/heart-header.svg'
import userIcon from '../../assets/Main/userIcon.svg'
import useTypedDispatch from "../../hooks/useTypedDispatch";
import { logout } from "../../redux/Slices/AuthSlice/AuthActionCreator";

const Header: FC = () => {
    const [activeLogin, setActiveLogin] = useState<boolean>(false)
    const [activeSiginIn, setActiveSiginIn] = useState<boolean>(false)
    const { isAuth } = useTypedSelector(state => state.authReducer)
    const accessToken = localStorage.getItem('accessToken') 
    const dispatch = useTypedDispatch()
    const LogoutHandler = () => {
        dispatch(logout())
    }
    return (
        <div style={accessToken ? { "backgroundColor": '#D9D9D9' } : { "backgroundColor": '#686868' }} className={styles.Container}>
            <Link to='/'>
                <img className={styles.Logo} src={logo} />
            </Link>
            <div className={accessToken ? styles.BlockLinkAuth : styles.BlockLink}>
                <a href='tel:+79999998877'>+7 999 999 88 77</a>
                <a href="mailto:Mail@gmail.com">Mail@gmail.com</a>
                <Link to='/catalog'>Каталог</Link>
                <div>На карте</div>
                <div>FAQ</div>
            </div>

            {accessToken ? <>
                <div className={styles.RightSideBar}>
                    <img src={heart} alt="heart" />
                    <div className={styles.UserPanel}>
                        {/* тут должен быть выпадающий список  */}
                        <div onClick={LogoutHandler}  className={styles.BarLine} /> 
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