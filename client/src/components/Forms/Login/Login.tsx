import { FC, useState } from 'react'



import Input from '../../../helpers/Input/Input'
import hidden from '../../../assets/Personal/hidden.svg'
import show from '../../../assets/Personal/show.svg'
import styles from './Login.module.scss'

const Login: FC = (): JSX.Element => {

    const [hidePassword, setHidePassword] = useState<boolean>(true);

    return (
        <>
            <div className={styles.Container}>
                <div className={styles.TextBlock}>
                    <h2>Вход</h2>
                    <h4>Забыли пароль?  Восстановить</h4>
                </div>
                <Input placeholder='Почта' type='text' />
                <div className={styles.Password}>
                    <Input placeholder='Пароль' type={hidePassword ? "password" : "text"} />
                    <img onClick={() => setHidePassword(!hidePassword)} src={hidePassword ? hidden : show} alt="hiiden" />
                </div>
                <button className={styles.btn}>Войти</button>
            </div>
        </>
    )
}

export default Login