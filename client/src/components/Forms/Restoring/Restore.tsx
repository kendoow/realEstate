import { FC } from 'react'

import styles from './Restore.module.scss'
import { RestoreProps } from './Restore.types'


const Restore: FC<RestoreProps> = ({setActive, setPage}): JSX.Element => {
    
    const RedirectHanlder = () => {
        setPage('login')
    }

    return (
        <>
            <div className={styles.Container}>
                <h2 className={styles.Title}>Восстановление</h2>
                <button 
                    onClick={RedirectHanlder} 
                    className={styles.Redirect}
                >
                    Войти в аккаунт
                </button>
                <input 
                    className={styles.Input} 
                    type="text" 
                    placeholder='Ваша почта или телефон'
                />
                <button className={styles.Btn}>Восстановить</button>
            </div>
           
        </>
    )
}

export default Restore