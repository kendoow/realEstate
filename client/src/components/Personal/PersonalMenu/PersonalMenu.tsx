import { FC } from 'react'
import { Link } from 'react-router-dom'

import useTypedDispatch from '../../../hooks/useTypedDispatch';
import { removeFavourite } from '../../../redux/Slices/FavouriteSlice/FavouriteSlice';
import { logout } from '../../../redux/Slices/AuthSlice/AuthActionCreator';

import styles from './PersonalMenu.module.scss'

import profile from '../../../assets/Personal/profile.svg';
import favorite from '../../../assets/Personal/favorite.svg';
import exit from '../../../assets/Personal/exit.svg';

const PersonalMenu: FC = (): JSX.Element => {
    const dispatch = useTypedDispatch()

    const logoutHandler = () => {
        dispatch(removeFavourite())
        dispatch(logout())
    }

    return (
        <>
            <div className={styles.Container}>
                <Link to='/personal' className={styles.NavItem}>
                    <img 
                        src={profile} 
                        alt="Profile Icon" 
                    />
                    <button className={styles.Btn}>Профиль</button>
                </Link>
                <Link to='/favorite' className={styles.NavItem}>
                    <img 
                        src={favorite} 
                        alt="Favourite Icon" 
                    />
                    <button className={styles.Btn}>Избранное</button>
                </Link>
                <Link 
                    to='/' 
                    className={styles.NavItem}
                    onClick={logoutHandler}
                >
                    <img 
                        src={exit} 
                        alt="Exit Icon" 
                    />
                    <button className={styles.Btn}>Выйти</button>
                </Link>
            </div>
        </>
    )
}

export default PersonalMenu
