import { FC } from 'react'

import styles from './PersonalAbout.module.scss'

import userIcon from '../../../assets/Main/userIcon.svg'


const PersonalAbout:FC = () :JSX.Element => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img width={50} height={50} src={userIcon} alt="logo" />
                    <p>Иван Иванов</p>
                </div>
                <div className={styles.info}>
                    <p>Имя</p>
                    <input type="text" placeholder='Имя' />
                    <p>Фамилия</p>
                    <input type="text" placeholder='Фамилия' />
                    <p>Дата рождения</p>
                    <input type="date" placeholder='Дата рождения' />
                </div>
                <button className={styles.btn}>Сохранить</button>
            </div>
        </>
    )
}

export default PersonalAbout