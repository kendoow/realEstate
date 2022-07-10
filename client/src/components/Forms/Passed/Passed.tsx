import { FC } from 'react'

import styles from './Passed.module.scss'
const Passed: FC = () => {
    return (
        <>
            <div className={styles.Container}>
                <h2>Благодарим<br /> за регистрацию!</h2>
                <h3>
                    Подтвердите аккаунт, что бы полноценно пользоваться им.
                    Вся необходимая информация выслана Вам на почту.
                </h3>
                <h4>
                    Если письма не видно - посмотрите папку Спам
                </h4>
                <button>Войти в аккаунт</button>
            </div>
        </>
    )
}

export default Passed