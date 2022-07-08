import { FC } from 'react'
import { Header } from '../../components'
import styles from './FAQ.module.scss'
import FAQimg from '../../assets/Main/FAQ.svg'

const FAQ:FC = () => {
  return (
    <>
    <Header/>
    <div className={styles.Container}>
        <h1>Скоро здесь будут часто задаваемые вопросы</h1>
        <img src={FAQimg} alt="" />
    </div>
    </>
  )
}

export default FAQ