import { FC, useState } from 'react'

import useInput from '../../../hooks/useInput'
import useTypedDispatch from '../../../hooks/useTypedDispatch'
import { registration } from '../../../redux/Slices/AuthSlice/AuthActionCreator'

import { RegistrationProps } from './Registration.types'
import { UserRegistrationType } from '../../../redux/Slices/AuthSlice/AuthSlice.types'


import styles from './Registration.module.scss'

import hidden from '../../../assets/Personal/hidden.svg'
import show from '../../../assets/Personal/show.svg'

const Registration: FC<RegistrationProps> = ({ setActive, setPage }): JSX.Element => {
    const [hidePasswordFirts, setHidePasswordFirts] = useState<boolean>(true);
    const [hidePasswordSecond, setHidePasswordSecond] = useState<boolean>(true);

    const emailReg = useInput('', { isEmpty: true, minLength: 5, isEmail: true })
    const passwordReg = useInput('', { isEmpty: true, minLength: 3 })
    const passwordRepeatReg = useInput('', { isEmpty: true, minLength: 3 })
    const [checked, setChecked] = useState<boolean>(true); // проверка чекбокса
    const nameReg = useInput('', { isEmpty: true, minLength: 1 })
    const dispatch = useTypedDispatch()


    const RedirectHanlder = () => {
        setPage('login')
    }
    const changeCheckbox = () => {
        setChecked(!checked);
    }
    const isValid = !emailReg.inputVaild || !passwordReg.inputVaild || !nameReg.inputVaild || !passwordRepeatReg.inputVaild || passwordReg.value !== passwordRepeatReg.value || checked;


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
            <div className={styles.Container}>
                <h2 className={styles.Title}>Регистрация</h2>
                <div className={styles.Text}>Есть аккаунт?
                    <button
                        className={styles.Redirect}
                        onClick={RedirectHanlder}>
                        Войти
                    </button>
                </div>

                {nameReg.isDirty && nameReg.isEmpty
                    && <div className={styles.Error}>Поле не может быть пустым</div>}
                {nameReg.isDirty && nameReg.minLengthError
                    && <div className={styles.Error}>Минимальная длина поля - 5 символов</div>}
                <input 
                    value={nameReg.value}
                    onChange={nameReg.onChange}
                    onBlur={nameReg.onBlur} 
                    className={styles.Input} 
                    placeholder='Ваше имя' 
                    type='text' 
                />

                {emailReg.isDirty && emailReg.isEmpty
                    && <div className={styles.Error}>Поле не может быть пустым</div>}
                {emailReg.isDirty && emailReg.minLengthError
                    && <div className={styles.Error}>Минимальная длина поля - 5 символов</div>}
                {emailReg.isDirty && emailReg.isEmail
                    && <div className={styles.Error}>Недопустимый email</div>}
                <input 
                    value={emailReg.value}
                    onChange={emailReg.onChange}
                    onBlur={emailReg.onBlur} 
                    className={styles.Input} 
                    placeholder='Почта' 
                    type='text' 
                />

                {passwordReg.isDirty && passwordReg.isEmpty
                    && <div className={styles.Error}>Поле не может быть пустым</div>}
                {passwordReg.isDirty && passwordReg.minLengthError
                    && <div className={styles.Error}>Минимальная длина поля - 5 символов</div>}

                <div className={styles.Password}>
                    <input 
                        value={passwordReg.value}
                        onChange={passwordReg.onChange}
                        onBlur={passwordReg.onBlur} 
                        className={styles.Input} 
                        placeholder='Пароль' 
                        type={hidePasswordFirts ? 'password' : 'text'} 
                    />
                    <img 
                        onClick={() => setHidePasswordFirts(!hidePasswordFirts)} 
                        src={hidePasswordFirts ? hidden : show} 
                        alt="hiiden" 
                    />
                </div>

                {passwordRepeatReg.isDirty && passwordRepeatReg.isEmpty
                    && <div className={styles.Error}>Поле не может быть пустым</div>}
                {passwordRepeatReg.isDirty && passwordRepeatReg.minLengthError
                    && <div className={styles.Error}>Минимальная длина поля - 5 символов</div>}
                {passwordReg.value !== passwordRepeatReg.value && <div className={styles.Error}>Пароли не совпадают</div>}

                <div className={styles.Password}>
                    <input 
                        value={passwordRepeatReg.value}
                        onChange={passwordRepeatReg.onChange}
                        onBlur={passwordRepeatReg.onBlur} 
                        className={styles.Input} placeholder='Повторите пароль' 
                        type={hidePasswordSecond ? 'password' : 'text'} 
                    />
                    <img 
                        onClick={() => setHidePasswordSecond(!hidePasswordSecond)} 
                        src={hidePasswordSecond ? hidden : show} 
                        alt="hiiden" 
                    />

                </div>
                <div className={styles.Checkbox}>
                    <input 
                        onChange={changeCheckbox} 
                        type="checkbox" 
                    /> 
                    Я принимаю условия пользовательского соглашения
                </div>

                <button 
                    onClick={handlerButtonReg} 
                    disabled={isValid} 
                    className={styles.Btn}
                >
                    Создать аккаунт
                </button>
            </div>

        </>
    )
}

export default Registration