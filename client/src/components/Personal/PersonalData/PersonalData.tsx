
import { FC } from 'react'
import styles from './PersonalData.module.scss'

const PersonalData: FC = (): JSX.Element => {
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
              <p>Номер телефона</p>

              <h4 className={styles.confirmed}>
               Подтверждён
              </h4>
            </div>
          
          <input type="tel" placeholder='phone number' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
          <a href="#" className={styles.link}>Cменить электронную почту</a>
          </div>
        </div>

        <div className={styles.changePassword}>
          <h5>Сменить пароль</h5>
          <input type="text" />
          <input type="text" />
          <button className={styles.btn}>Сохранить</button>
        </div>
      </div>
    </>
  )
}

export default PersonalData