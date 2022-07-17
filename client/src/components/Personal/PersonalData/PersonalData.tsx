
import { FC, useState } from 'react'

import styles from './PersonalData.module.scss'

import hidden from '../../../assets/Personal/hidden.svg'
import show from '../../../assets/Personal/show.svg'
import { Link } from 'react-router-dom'
import useTypedDispatch from '../../../hooks/useTypedDispatch'
import { removeFavourite } from '../../../redux/Slices/FavouriteSlice/FavouriteSlice'
import { logout } from '../../../redux/Slices/AuthSlice/AuthActionCreator'
import exit from '../../../assets/Personal/exit.svg';


const PersonalData: FC = (): JSX.Element => {

  const dispatch = useTypedDispatch()

    const logoutHandler = () => {
        dispatch(removeFavourite())
        dispatch(logout())
    }

  const [hidePasswordFirst, setHidePasswordFirst] = useState(true); // скрыть показать пароль
  const [hidePasswordSecond, setHidePasswordSecond] = useState(true); // скрыть показать пароль

  return (
    <>
      <div className={styles.container}>
        <div className={styles.confirm}>
          <div className={styles.item}>
            <div className={styles.title}>
              <p>Номер телефона</p>
              <h4 className={styles.unconfirmed}>
                Не подтверждён
              </h4>
            </div>


            <input type="tel" placeholder='phone number' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
            <a href='#' className={styles.link}>Подтвердить номер телефона</a>
          </div>

          <div className={styles.item}>
            <div className={styles.title}>
              <p>Электронная почта</p>

              <h4 className={styles.confirmed}>
                Подтверждёнa
              </h4>
            </div>

            <input type="tel" placeholder='email' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
            <a href="#" className={styles.link}>Cменить электронную почту</a>
          </div>
        </div>

        <div className={styles.changePassword}>
          <h5>Сменить пароль</h5>
          <div className={styles.inputWrapper}><input type={hidePasswordFirst ? "password" : "text"} /><img onClick={() => setHidePasswordFirst(!hidePasswordFirst)} src={hidePasswordFirst ? hidden : show} alt="hiiden" /></div>
          <div className={styles.inputWrapper}><input type={hidePasswordSecond ? "password" : "text"} /><img onClick={() => setHidePasswordSecond(!hidePasswordSecond)} src={hidePasswordSecond ? hidden : show} alt="hiiden" /></div>
          <button className={styles.btn}>Сохранить</button>
        </div>
      </div>
      <div className={styles.MobileCenter}>
      <Link
                 to='/' 
                 className={styles.ExitMobile}
                 onClick={logoutHandler}>
                    <img src={exit} alt="" />
                    <button className={styles.BtnMobile}>Выйти</button>
        </Link>
        </div>
    </>
  )
}

export default PersonalData