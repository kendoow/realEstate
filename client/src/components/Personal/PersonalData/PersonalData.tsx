import { ChangeEvent, FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import useTypedSelector from '../../../hooks/useTypedSelector'
import useTypedDispatch from '../../../hooks/useTypedDispatch'
import { removeFavourite } from '../../../redux/Slices/FavouriteSlice/FavouriteSlice'
import { authUserUpdate, authUserUpdatePassword, logout } from '../../../redux/Slices/AuthSlice/AuthActionCreator'
import { authSelector } from '../../../redux/Slices/AuthSlice/AuthSelector'

import styles from './PersonalData.module.scss'

import hidden from '../../../assets/Personal/hidden.svg'
import show from '../../../assets/Personal/show.svg'
import exit from '../../../assets/Personal/exit.svg';
import { IUser, IPasswordUpdate } from '../../../redux/Slices/AuthSlice/AuthSlice.types'


const PersonalData: FC = (): JSX.Element => {
  const { user, error } = useTypedSelector(authSelector)
  const dispatch = useTypedDispatch()

  const [hidePasswordFirst, setHidePasswordFirst] = useState<boolean>(true)
  const [hidePasswordSecond, setHidePasswordSecond] = useState<boolean>(true)

  const [phone, setPhone] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [passwordCurrent, setPasswordCurrent] = useState<string>('')
  const [passwordNew, setPasswordNew] = useState<string>('')

  useEffect(() => {
    if (user) {
      setPhone(user.phone || '')
      setEmail(user.email || '')
    }
  }, [user])

  const phoneHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
  }
  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const passwordCurrentHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordCurrent(e.target.value)
  }
  const passwordNewHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordNew(e.target.value)
  }

  const saveHandler = () => {
    const userUpdate: IUser = {
      ...user,
      phone: phone,
    }
    dispatch(authUserUpdate(userUpdate))

    if (passwordCurrent && passwordNew) {
      const userPassword: IPasswordUpdate = {
        passwordCurrent,
        passwordNew,
      }
  
      dispatch(authUserUpdatePassword(userPassword))

      setPasswordCurrent('')
      setPasswordNew('')  
    }  
  }

  const logoutHandler = () => {
    dispatch(removeFavourite())
    dispatch(logout())
  }

  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Confirm}>
          <div className={styles.Item}>
            <div className={styles.Title}>
              <div className={styles.Text}>Номер телефона</div>
              <h4 className={styles.Unconfirmed}>
                Не подтверждён
              </h4>
            </div>


            <input 
              type="tel" 
              placeholder='Телефон'
              value={phone}
              onChange={e => phoneHandler(e)}  
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
            />
            <a 
              href='#' 
              className={styles.Link}
            >
              Подтвердить номер телефона
            </a>
          </div>

          <div className={styles.Item}>
            <div className={styles.Title}>
              <div className={styles.Text}>Электронная почта</div>

              <h4 className={styles.Confirmed}>
                Подтверждёнa
              </h4>
            </div>

            <input 
              type="tel" // ?
              placeholder='Почта'
              disabled
              value={email}
              onChange={e => emailHandler(e)}  
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" // ?
            />
            {/* <a 
              href="#" 
              className={styles.Link}
            >
              Cменить электронную почту
            </a> */}
          </div>
        </div>

        <div className={styles.ChangePassword}>
          <h5>Сменить пароль</h5>
          <div className={styles.InputWrapper}>
            <input
              type={hidePasswordFirst ? "password" : "text"}
              placeholder='Текущий пароль'
              value={passwordCurrent}
              onChange={e => passwordCurrentHandler(e)}  
            />
            <img
              onClick={() => setHidePasswordFirst(!hidePasswordFirst)}
              src={hidePasswordFirst ? hidden : show}
              alt="Hidden Icon"
            />
          </div>
          <div className={styles.InputWrapper}>
            <input
              type={hidePasswordSecond ? "password" : "text"}
              placeholder='Новый пароль'
              value={passwordNew}
              onChange={e => passwordNewHandler(e)}  
            />
            <img
              onClick={() => setHidePasswordSecond(!hidePasswordSecond)}
              src={hidePasswordSecond ? hidden : show}
              alt="Hidden Icon"
            />
          </div>
          {error === 'Ошибка при обновление пароля' && <div className={styles.Error}>{error}</div> }
          <button
            onClick={saveHandler} 
            className={styles.Btn}
          >
            Сохранить
          </button>
        </div>
      </div>
      <div className={styles.MobileCenter}>
        <Link
          to='/'
          className={styles.ExitMobile}
          onClick={logoutHandler}
        >
          <img
            src={exit}
            alt=""
          />
          <button className={styles.BtnMobile}>Выйти</button>
        </Link>
      </div>
    </>
  )
}

export default PersonalData