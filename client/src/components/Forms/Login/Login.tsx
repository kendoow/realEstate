import { FC, useState } from 'react'


import useInput from '../../../hooks/useInput'
import useTypedDispatch from '../../../hooks/useTypedDispatch'
import { login } from '../../../redux/Slices/AuthSlice/AuthActionCreator'

import { UserLoginType } from '../../../redux/Slices/AuthSlice/AuthSlice.types'
import { LoginProps } from './Login.types'


import styles from './Login.module.scss'

import hidden from '../../../assets/Personal/hidden.svg'
import show from '../../../assets/Personal/show.svg'
import { Link } from 'react-router-dom'

const Login: FC<LoginProps> = ({setActive, setPage}): JSX.Element => {

    

    const RedirectHanlder = () => {
        setPage('restore')
    }
    
    const [hidePassword, setHidePassword] = useState<boolean>(true); // скрыть показать пароль
    const dispatch = useTypedDispatch()

    const emailLogin = useInput('', { isEmpty: true, minLength: 5, isEmail: true })
    const passwordLogin = useInput('', { isEmpty: true, minLength: 3 })

    const handlerButtonLogin = () => {
        const userLogin: UserLoginType = {
            email: emailLogin.value,
            password: passwordLogin.value,
        }
        setPage('')
        setActive(false)
        dispatch(login(userLogin))    
    }

    return (
        <>
            <div className={ styles.Container}>
                
                <div className={styles.TextBlock}>
                    <h2>Вход</h2>
                    <h4>Забыли пароль?
                        <button 
                         className={styles.Redirect} 
                         onClick={RedirectHanlder}>
                            Восстановить
                        </button>
                    </h4>

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
                <button 
                 onClick={handlerButtonLogin} 
                 disabled = {!passwordLogin.inputVaild || !emailLogin.inputVaild} 
                 className={styles.btn}>
                    Войти
                </button>
            </div>
            
        </>
    )
}

export default Login