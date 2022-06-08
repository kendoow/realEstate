import { FC } from 'react'

import { Footer, Header, MainProducts, MainTitle } from '../../components'; 

import styles from './Main.module.scss';

const Main: FC = () => {
  return (
    <div className={styles.Container}>
        <Header />
        <div className={styles.Body}>
          <MainTitle />
          <MainProducts />
        </div>
        <Footer />
    </div>
  )
}

export default Main;