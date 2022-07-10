import { FC, useEffect, useState } from 'react'

import useInput from '../../../hooks/useInput'
import useTypedDispatch from '../../../hooks/useTypedDispatch'
import { IUser, UserRegistrationType } from '../../../redux/Slices/AuthSlice/AuthSlice.types'
import { registration } from '../../../redux/Slices/AuthSlice/AuthActionCreator'

import Checkbox from '../../../helpers/Checkbox/Checkbox'
import Login from '../Login/Login'

import styles from './Registration.module.scss'

import hidden from '../../../assets/Personal/hidden.svg'
import show from '../../../assets/Personal/show.svg'
import { RegistrationProps } from './Registration.types'

const Registration: FC<RegistrationProps> = ({setActive}): JSX.Element => {
    const [hidePasswordFirts, setHidePasswordFirts] = useState<boolean>(true);
    const [hidePasswordSecond, setHidePasswordSecond] = useState<boolean>(true);
    
    const emailReg = useInput('', { isEmpty: true, minLength: 5, isEmail: true })
    const passwordReg = useInput('', { isEmpty: true, minLength: 3 })
    const passwordRepeatReg = useInput('', { isEmpty: true, minLength: 3 })
    
    const nameReg = useInput('', { isEmpty: true, minLength: 1 })
    const dispatch = useTypedDispatch()

    const [page, setPage] = useState<string>('') // отрисовка по состоянию
    const RedirectHanlder = () => {
        setPage('login')
    }
    
    const isValid = !emailReg.inputVaild || !passwordReg.inputVaild || !nameReg.inputVaild || !passwordRepeatReg.inputVaild || passwordReg.value !== passwordRepeatReg.value
    

    const handlerButtonReg = () => {
        const userReg: UserRegistrationType = {
            email: emailReg.value,
            password: passwordReg.value,
            name: nameReg.value
        }
        setPage('')
        setActive(false)
        dispatch(registration(userReg))
    }

    return (
        <>
            <div className={page === 'login' ? styles.None : styles.Container}>
                <h2>Регистрация</h2>
                <h4>Есть аккаунт?  
                    <button 
                     className={styles.Redirect} 
                     onClick={RedirectHanlder}>
                        Войти
                    </button>
                </h4>

                {nameReg.isDirty && nameReg.isEmpty
                    && <div className={styles.Error}>Поле не может быть пустым</div>}
                {nameReg.isDirty && nameReg.minLengthError
                    && <div className={styles.Error}>Минимальная длина поля - 5 символов</div>}
                <input value={nameReg.value}
                    onChange={nameReg.onChange}
                    onBlur={nameReg.onBlur} className={styles.Input} placeholder='Ваше имя' type='text' />

                {emailReg.isDirty && emailReg.isEmpty
                    && <div className={styles.Error}>Поле не может быть пустым</div>}
                {emailReg.isDirty && emailReg.minLengthError
                    && <div className={styles.Error}>Минимальная длина поля - 5 символов</div>}
                {emailReg.isDirty && emailReg.isEmail
                    && <div className={styles.Error}>Недопустимый email</div>}
                <input value={emailReg.value}
                    onChange={emailReg.onChange}
                    onBlur={emailReg.onBlur} className={styles.Input} placeholder='Почта' type='text' />

                {passwordReg.isDirty && passwordReg.isEmpty
                    && <div className={styles.Error}>Поле не может быть пустым</div>}
                {passwordReg.isDirty && passwordReg.minLengthError
                    && <div className={styles.Error}>Минимальная длина поля - 5 символов</div>}

                <div className={styles.Password}>
                    <input value={passwordReg.value}
                        onChange={passwordReg.onChange}
                        onBlur={passwordReg.onBlur} className={styles.Input} placeholder='Пароль' type={hidePasswordFirts ? 'password' : 'text'} />
                    <img onClick={() => setHidePasswordFirts(!hidePasswordFirts)} src={hidePasswordFirts ? hidden : show} alt="hiiden" />
                </div>

                {passwordRepeatReg.isDirty && passwordRepeatReg.isEmpty
                    && <div className={styles.Error}>Поле не может быть пустым</div>}
                {passwordRepeatReg.isDirty && passwordRepeatReg.minLengthError
                    && <div className={styles.Error}>Минимальная длина поля - 5 символов</div>}
                {passwordReg.value !== passwordRepeatReg.value && <div className={styles.Error}>Пароли не совпадают</div>}

                <div className={styles.Password}>
                    <input value={passwordRepeatReg.value}
                        onChange={passwordRepeatReg.onChange}
                        onBlur={passwordRepeatReg.onBlur} className={styles.Input} placeholder='Повторите пароль' type={hidePasswordSecond ? 'password' : 'text'} />
                    <img onClick={() => setHidePasswordSecond(!hidePasswordSecond)} src={hidePasswordSecond ? hidden : show} alt="hiiden" />

                </div>
                <Checkbox text='чекбокса пока что нет' />
                <button onClick={handlerButtonReg} disabled={isValid} className={styles.btn}>Создать аккаунт</button>
            </div>
            {page === 'login' && <Login setActive={setActive} />}
        </>
    )
}

export default Registration