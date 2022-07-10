import { FC, useState } from 'react'
import Login from '../Login/Login'

import styles from './Restore.module.scss'
import { RestoreProps } from './Restore.types'


const Restore: FC<RestoreProps> = ({setActive}): JSX.Element => {
    const [page, setPage] = useState<string>('') // отрисовка по состоянию
    const RedirectHanlder = () => {
        setPage('login')
    }

    return (
        <>
            <div className={page === 'login' ? styles.None : styles.Container}>
                <h2>Восстановление</h2>
                <button onClick={RedirectHanlder} className={styles.Redirect}>Войти в аккаунт</button>
                <input className={styles.Input} type="text" placeholder='Ваша почта или телефон'/>
                <button className={styles.Btn}>Восстановить</button>
            </div>
            {page === 'login' && <Login setActive={setActive} />}  
        </>
    )
}

export default Restore