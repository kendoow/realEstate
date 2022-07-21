import { FC, useEffect, useState } from 'react'


import useInput from '../../../hooks/useInput'

import useTypedDispatch from '../../../hooks/useTypedDispatch'
import useTypedSelector from '../../../hooks/useTypedSelector'
import { login } from '../../../redux/Slices/AuthSlice/AuthActionCreator'
import { authSelector } from '../../../redux/Slices/AuthSlice/AuthSelector'

import { UserLoginType } from '../../../redux/Slices/AuthSlice/AuthSlice.types'
import { LoginProps } from './Login.types'


import styles from './Login.module.scss'

import hidden from '../../../assets/Personal/hidden.svg'
import show from '../../../assets/Personal/show.svg'

const Login: FC<LoginProps> = ({ setActive, setPage }) => {
    const dispatch = useTypedDispatch()
    const { isAuth, error } = useTypedSelector(authSelector)

    const [hidePassword, setHidePassword] = useState<boolean>(true)

    const emailLogin = useInput('', { isEmpty: true, minLength: 5, isEmail: true })
    const passwordLogin = useInput('', { isEmpty: true, minLength: 3 })

    const handlerButtonLogin = () => {
        const userLogin: UserLoginType = {
            email: emailLogin.value,
            password: passwordLogin.value,
        }
        dispatch(login(userLogin))
        
    }

    
    useEffect(() => {
        if (isAuth) {
            setActive(false)
            setPage('')
        }

    }, [isAuth])

    const RedirectHanlder = () => {
        setPage('restore')
    }

    return (
        <div className={styles.Container}>
            <div className={styles.TextBlock}>
                <h2 className={styles.Title}>Вход</h2>
                <div className={styles.Text}>Забыли пароль?
                    <button
                        className={styles.Redirect}
                        onClick={RedirectHanlder}>
                        Восстановить
                    </button>
                </div>
            </div>

            {emailLogin.isDirty && emailLogin.isEmpty
                && <div className={styles.Error}>Поле не может быть пустым</div>}
            {emailLogin.isDirty && emailLogin.minLengthError
                && <div className={styles.Error}>Минимальная длина поля - 5 символов</div>}
            {emailLogin.isDirty && emailLogin.isEmail
                && <div className={styles.Error}>Недопустимый email</div>}
            <input
                value={emailLogin.value}
                onChange={emailLogin.onChange}
                onBlur={emailLogin.onBlur}
                className={styles.Input}
                placeholder='Почта'
                type='text' />

            {passwordLogin.isDirty && passwordLogin.isEmpty
                && <div className={styles.Error}>Поле не может быть пустым</div>}
            {passwordLogin.isDirty && passwordLogin.minLengthError
                && <div className={styles.Error}>Минимальная длина поля - 5 символов</div>}
            <div className={styles.Password}>
                <input
                    value={passwordLogin.value}
                    onChange={passwordLogin.onChange}
                    onBlur={passwordLogin.onBlur}
                    className={styles.Input}
                    placeholder='Пароль'
                    type={hidePassword ? "password" : "text"} />
                <img
                    onClick={() => setHidePassword(!hidePassword)}
                    src={hidePassword ? hidden : show}
                    alt="hidden" />
            </div>
            {!!error && <div className={styles.Error}>Неправильная почта или пароль</div>}
            <button
                onClick={handlerButtonLogin}
                disabled={!passwordLogin.inputVaild || !emailLogin.inputVaild}
                className={styles.Btn}>
                Войти
            </button>
        </div>
    )
}

export default Login