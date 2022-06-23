import {FC} from 'react'
import { InputProps } from './Input.types'
import styles from './Input.module.scss'

const Input:FC<InputProps> = ({placeholder, type}):JSX.Element => {

  return (
    <div className={styles.Conatiner}>
        <input className={styles.Input} type={type} placeholder={placeholder}/>
    </div>
  )
}

export default Input
