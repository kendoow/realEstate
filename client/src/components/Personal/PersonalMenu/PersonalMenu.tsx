import { FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './PersonalMenu.module.scss'

import profile from '../../../assets/Personal/profile.svg';
import favorite from '../../../assets/Personal/favorite.svg';
import exit from '../../../assets/Personal/exit.svg';

const PersonalMenu: FC = (): JSX.Element => {
    return (
        <>
            <div className={styles.container}>
                <Link to='/' className={styles.navItem}>
                    <img src={profile} alt="" />
                    <p>Профиль</p>
                </Link>
                <Link to='/' className={styles.navItem}>
                    <img src={favorite} alt="" />
                    <p>Избранное</p>
                </Link>
                <Link to='/' className={styles.navItem}>
                    <img src={exit} alt="" />
                    <p>Выйти</p>
                </Link>
            </div>
        </>
    )
}

export default PersonalMenu
