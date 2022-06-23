import { FC, useState } from 'react'

import Input from '../../../helpers/Input/Input'
import styles from './Registration.module.scss'
import hidden from '../../../assets/Personal/hidden.svg'
import show from '../../../assets/Personal/show.svg'
import Checkbox from '../../../helpers/Checkbox/Checkbox'


const Registration: FC = (): JSX.Element => {

    const [hidePasswordFirts, setHidePasswordFirts] = useState<boolean>(true);
    const [hidePasswordSecond, setHidePasswordSecond] = useState<boolean>(true);

    return (
        <>
            <div className={styles.Container}>
                <h2>Регистрация</h2>
                <h4>Есть аккаунт?  Войти</h4>
                <Input placeholder='Ваше имя' type='text' />
                <Input placeholder='Почта' type='text' />
                <div className={styles.Password}>
                    <Input placeholder='Пароль' type={hidePasswordFirts ? 'password' : 'text'} />
                    <img onClick={() => setHidePasswordFirts(!hidePasswordFirts)} src={hidePasswordFirts ? hidden : show} alt="hiiden" />
                </div>
                <div className={styles.Password}>
                    <Input placeholder='Повторите пароль' type={hidePasswordSecond ? 'password' : 'text'} />
                    <img onClick={() => setHidePasswordSecond(!hidePasswordSecond)} src={hidePasswordSecond ? hidden : show} alt="hiiden" />

                </div>
                <Checkbox text= 'чекбокса пока что нет'/>
                <button className={styles.btn}>Создать аккаунт</button>
            </div>
        </>
    )
}

export default Registration