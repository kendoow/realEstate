import { FC } from 'react'

import { Footer, Header, MainProducts, MainTitle } from '../../components'; 
import Filter from '../../UI/Filter/Filter';

import styles from './Main.module.scss';

const Main: FC = () => {
  return (
    <div className={styles.Container}>
        <Header />
         
        <div className={styles.Body}>
          <Filter />
          <MainTitle /> 
          <MainProducts />
        </div>
        <Footer />
    </div>
  )
}

export default Main;