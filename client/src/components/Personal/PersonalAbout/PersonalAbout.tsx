import { ChangeEvent, FC, useEffect, useState } from 'react'

import useTypedSelector from '../../../hooks/useTypedSelector'
import useTypedDispatch from '../../../hooks/useTypedDispatch'
import { authUserUpdate } from '../../../redux/Slices/AuthSlice/AuthActionCreator'
import { authSelector } from '../../../redux/Slices/AuthSlice/AuthSelector'

import { IUser } from '../../../redux/Slices/AuthSlice/AuthSlice.types'

import styles from './PersonalAbout.module.scss'

import userIcon from '../../../assets/Main/userIcon.svg'

const PersonalAbout: FC = () => {
    const { user } = useTypedSelector(authSelector)
    const dispatch = useTypedDispatch()


    const [name, setName] = useState<string>('')
    const [lastname, setLastname] = useState<string>('')
    const [birthday, setBirthday] = useState<string>('')

    useEffect(() => {
        if (user) {
            setName(user.name || '')
            setLastname(user.lastname || '')
            setBirthday(user.birthday || '')    
        } 
    }, [user])

    const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const lastnameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLastname(e.target.value)
    }
    const birthdayHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setBirthday(e.target.value)
    }

    const saveHandler = () => {
        const userUpdate: IUser = {
            ...user,
            name,
            lastname,
            birthday,
        }
        dispatch(authUserUpdate(userUpdate))
    }

    return (
        <>
            <div className={styles.Container}>
                <div className={styles.Logo}>
                    <img
                        width={50}
                        height={50}
                        src={userIcon}
                        alt="User Icon"
                    />
                    <div className={styles.Name}>{name} {lastname}</div>
                </div>
                <div className={styles.Info}>
                    <div className={styles.Text}>Имя</div>
                    <input
                        className={styles.Input}
                        value={name}
                        onChange={e => nameHandler(e)}
                        type="text"
                        placeholder='Имя'
                    />
                    <div className={styles.Text}>Фамилия</div>
                    <input
                        className={styles.Input}
                        value={lastname}
                        onChange={e => lastnameHandler(e)}
                        type="text"
                        placeholder='Фамилия'
                    />
                    <div className={styles.Text}>Дата рождения</div>
                    <input
                        className={styles.Input}
                        value={birthday}
                        onChange={e => birthdayHandler(e)}
                        type="date"
                        placeholder='Дата рождения'
                    />
                </div>
                <button
                    onClick={saveHandler} 
                    className={styles.Btn}
                >
                    Сохранить
                </button>
            </div>
        </>
    )
}

export default PersonalAbout